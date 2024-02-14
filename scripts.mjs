const app = ({

  data(){
    return{
      toDos: [],
      newToDo: ''
    };
  },
  
  methods: {
    toggleDone(todo){
      todo.done = !todo.done;
    },
    clearAll(){
      this.toDos = [];
    },
    addToDo(){
      if(this.newToDo.trim() !== ''){ //Trim function removes the blanks of the text
        this.toDos.push({text: this.newToDo, done: false});
        this.newToDo = '';
        localStorage.setItem("toDos", JSON.stringify(this.toDos));
      }else{
        alert("The field must be filled.");
      }
    }
  }

});

Vue.createApp(app).mount('#app');