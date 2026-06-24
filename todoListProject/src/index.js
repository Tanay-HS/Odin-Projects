import {renderProjects, initDOMListeners, renderTodos} from "./Modules/domController.js";
import appState from "./Modules/appState.js";  
import MakeTodo from "./Modules/todo.js";
import "./style.css";


initDOMListeners();

if (appState.projects.length === 0) {
    const odinProject = appState.addProject("Odin Coding Tasks");
    const gymProject = appState.addProject("Gym Routine");

    const todo1 = new MakeTodo("Finish Todo App Logic", "2026-06-25", "Separate DOM from Logic layers");
    const todo2 = new MakeTodo("Leg Day", "2026-06-24", "Don't skip squats");

    odinProject.addTodo(todo1);
    gymProject.addTodo(todo2);

    // Save this default initialization to storage
    appState.saveToLocalStorage();
}

// Ensure an active project is selected on startup
if (appState.projects.length > 0 && !appState.currentProject) {
    appState.currentProject = appState.projects[0];
}

renderProjects();
renderTodos();