<template>
  <div class="TodoPage px-5 pb-5">
    <v-list
      flat
    >
      <!-- "My Todo List" text in main screen -->
      <!-- on clicking append-icon "+" or pressing enter key, trigger method taskAdd -->
      <h2 class="text-center pa-5">My Todo List</h2>
      <v-text-field
        v-model="newTaskName"
        @click:append="taskAdd"
        @keyup.enter="taskAdd"
        class="px-3"
        outlined
        label="Add task"
        append-icon="mdi-plus"
        clearable
      ></v-text-field>

      <v-divider></v-divider>

      <div
        v-for="task in tasks"
        :key="task.id"
      >
        <!-- On clicking the task's row, mark it as done; execute method taskDone -->
        <v-list-item
          @click="taskDone(task.id)"
          :class="{ 'green lighten-4' : task.status}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.status"
                color="success"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <!-- Pencil icon button to execute taskEdit when clicked -->
              <v-btn
                icon
                @click.stop="taskEdit(task.id)"
              >
                <v-icon color="amber">mdi-pencil</v-icon>
              </v-btn>

              <!-- Trash icon button to execute taskDelete when clicked -->
              <v-btn
                icon
                @click.stop="taskDelete(task.id)"
              >
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>

          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>

    </v-list>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        newTaskName: '', // data property to bind in text field
        // editTaskID: null, // variable for editTask method
        tasks: []
      }
    },
    methods: {
      taskAdd() {
        // additional condiitonal statement to catch for taskEdit, did not finish implementation
        // if(this.editTaskID !== null){
        //   this.tasks.filter(task => id === this.editTaskID)[0].title = this.newTaskName
        //   this.editTaskID = null
        //   return
        // }

        // pushes new task objects onto array
        let taskNew = {
          id: Date.now(),
          title: this.newTaskName,
          status: false
        }
        this.tasks.push(taskNew)
        this.newTaskName = '' // clear input field after every user input
      },

      // sets task.status property as the opposite each time, i.e. if task not done, make it done
      taskDone(id) {
        let task = this.tasks.filter(task => id === task.id)[0]
        task.status = !task.status
      },

      // for taskEdit, did not finish, as of now it only places the selected task's title into the input field and sets editTaskID equal to its ID
      // implementation I wanted was if the user wanted to edit a task, the task's name would go into the input field
      // User would then make necessary task edits, then click "submit" again, and updating/replacing the task's name
      taskEdit(id) {
        this.newTaskName = this.tasks.filter(task => id === task.id)[0].title
        this.editTaskID = id
        // console.log('id :', id)
      },

      // taskDelete filters out the passed ID, get tasks with ID not equal to the ID of to-be-deleted_task
      taskDelete(id) {
        this.tasks = this.tasks.filter(task => id !== task.id)
      }
    }
  }
</script>