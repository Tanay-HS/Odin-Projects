
class MakeTodo {
    constructor(title, dueDate, description, notes, completed = false){
       this.title = title;
       this.dueDate = dueDate;
       this.description = description;
       this.notes = notes;
       this.completed = completed; 
    }

    markComplete(){
        this.completed = !this.completed;
    }
}

export default MakeTodo;