<template>
<div>
  <h1>Todo list</h1>
  <input type="text" v-model="task">
  <button @click="addTask">Add</button>

  <ul v-if="tasks">
    <li v-for="(task,index) in tasks" :key="index">
      {{task}}
      <button @click="removeTask(index)">X</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "TodoList",
  data(){
    return{
      task:'',
      tasks:[],
    }
  },
  methods:{
    addTask(){
      if(this.task){
        this.tasks.push(this.task);
        this.task='';
      }
    },
    removeTask(index){
      this.tasks.splice(index,1);
    }
  }
}
</script>

<style scoped>

</style>