import Todo from "./todo.js";

class MakeProject {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(newTodo){
        this.todos.push(newTodo);
    }
}

export default MakeProject;