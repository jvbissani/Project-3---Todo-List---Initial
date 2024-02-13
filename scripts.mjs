const app = ({

  data(){
    return{
      toDos: [
        { text: 'Learn HTML, CSS and Javascript', done: true},
        { text: 'Learn the basics of Vue JS', done: true},
        { text: 'Complete Vue JS Challenge with excellence', done: false}
      ],
      newToDoText: ''
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
      if(this.newToDoText.trim() !== ''){ //Trim function removes the blanks of the text
        this.toDos.push({text: this.newToDoText, done: false});
        this.newToDoText = '';
      }
    }
  }

});

Vue.createApp(app).mount('#app');