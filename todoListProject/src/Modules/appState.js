

import MakeProject from "./project.js";
import MakeTodo from "./todo.js"; 

class AppState {
    constructor() {
        this.projects = [];
        this.currentProject = null;
        this.loadFromLocalStorage(); 
    }

    addProject(name) {
        const newProject = new MakeProject(name);
        this.projects.push(newProject);
        this.saveToLocalStorage(); 
        return newProject;
    }

    saveToLocalStorage() {
        localStorage.setItem("todoAppState", JSON.stringify(this.projects));
    }

    loadFromLocalStorage() {
        const savedData = localStorage.getItem("todoAppState");
        if (!savedData) return;

        const rawProjects = JSON.parse(savedData);
        
        this.projects = rawProjects.map(rawProj => {
            const project = new MakeProject(rawProj.title);
            
            project.todos = rawProj.todos.map(rawTodo => {
                return new MakeTodo(
                    rawTodo.title,
                    rawTodo.dueDate,
                    rawTodo.description,
                    rawTodo.notes,
                    rawTodo.completed
                );
            });
            return project;
        });

        this.currentProject = this.projects[0] || null;
    }
}

const appstate = new AppState();
export default appstate;

