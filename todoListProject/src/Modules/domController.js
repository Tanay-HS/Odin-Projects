import { add } from "date-fns";
import appstate from "./appState.js";
import MakeTodo from "./todo.js";

function renderProjects(){
    const projectList = document.getElementById("project-list");
    projectList.textContent = "";
    
    appstate.projects.forEach(element => {
        const projectItemContainer = document.createElement("li");
        projectItemContainer.className = "project-item-container";
        projectItemContainer.style.display = "flex";
        projectItemContainer.style.justifyContent = "space-between";
        projectItemContainer.style.alignItems = "center";

        const projectText = document.createElement("span");
        projectText.textContent = element.title;
        projectText.style.cursor = "pointer";
        projectText.style.flexGrow = "1";
        
        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "×";
        deleteProjectBtn.className = "delete-project-btn";
        deleteProjectBtn.style.cursor = "pointer";

        // --- DELETE PROJECT EVENT ---
        deleteProjectBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            
            // Find index of this project in app state
            const projectIndex = appstate.projects.indexOf(element);
            if (projectIndex > -1) {
                appstate.projects.splice(projectIndex, 1);
                appstate.saveToLocalStorage();
            }

            // If the deleted project was the currently selected active one, reset it
            if (appstate.currentProject === element) {
                appstate.currentProject = appstate.projects[0] || null; // Fallback to first remaining project, or null
            }

            // Refresh both sides of the screen instantly
            renderProjects();
            renderTodos();
        });

        // Assemble the sidebar row
        projectItemContainer.appendChild(projectText);
        projectItemContainer.appendChild(deleteProjectBtn);
        projectList.appendChild(projectItemContainer);
    });
}

function renderTodos() {
    const activeTitle = document.getElementById("active-project-title");
    const todoList = document.getElementById("todo-list");

    todoList.textContent = "";

    if (!appstate.currentProject) {
        activeTitle.textContent = "Select a Project";
        return;
    }

    activeTitle.textContent = appstate.currentProject.title;

    appstate.currentProject.todos.forEach((todo) => {
        const todoItemContainer = document.createElement("div");
        todoItemContainer.className = "todo-item-container";

        const headerRow = document.createElement("div");
        headerRow.className = "todo-header-row";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
            todo.markComplete();
            appstate.saveToLocalStorage();
            titleSpan.classList.toggle("completed-text", todo.completed);
        });

        const textClickTarget = document.createElement("div");
        textClickTarget.className = "todo-text-target";
        textClickTarget.style.display = "flex";
        textClickTarget.style.gap = "12px";
        textClickTarget.style.flexGrow = "1";
        textClickTarget.style.cursor = "pointer";

        const titleSpan = document.createElement("span");
        titleSpan.textContent = todo.title;
        if (todo.completed) titleSpan.classList.add("completed-text");

        const dateSpan = document.createElement("span");
        dateSpan.textContent = `Due: ${todo.dueDate}`;

        textClickTarget.appendChild(titleSpan);
        textClickTarget.appendChild(dateSpan);

        headerRow.appendChild(checkbox);
        headerRow.appendChild(textClickTarget);

        const detailsArea = document.createElement("div");
        detailsArea.className = "todo-details";
        detailsArea.style.display = "none";

        const notesPara = document.createElement("p");
        notesPara.textContent = todo.notes ? `Notes: ${todo.notes}` : "No notes added.";
        detailsArea.appendChild(notesPara);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Task";
        deleteBtn.className = "delete-todo-btn";

        deleteBtn.addEventListener("click", () => {
            const todoIndex = appstate.currentProject.todos.indexOf(todo);

            if (todoIndex > -1) {
                appstate.currentProject.todos.splice(todoIndex, 1);
                appstate.saveToLocalStorage();
            }

            renderTodos();
        });

        detailsArea.appendChild(deleteBtn);

        textClickTarget.addEventListener("click", () => {
            const isHidden = detailsArea.style.display === "none";
            detailsArea.style.display = isHidden ? "block" : "none";
        });

        todoItemContainer.appendChild(headerRow);
        todoItemContainer.appendChild(detailsArea);
        todoList.appendChild(todoItemContainer);
    });
}

function initDOMListeners() {
    const addProjectBtn = document.getElementById("add-project-btn");
    const projectList = document.getElementById("project-list");

    const todoForm = document.getElementById("todo-form");
    const toggleFormBtn = document.getElementById("toggle-todo-form-btn");
    const todoFormContainer = document.getElementById("todo-form-container");

    toggleFormBtn.addEventListener("click", () => {
        const isHidden = todoFormContainer.style.display === "none";

        if (isHidden) {
            todoFormContainer.style.display = "block";
            toggleFormBtn.textContent = "Cancel";
            toggleFormBtn.classList.add("cancel-btn");
        } else {
            todoFormContainer.style.display = "none";
            toggleFormBtn.textContent = "+ New Task";
            toggleFormBtn.classList.remove("cancel-btn");
            todoForm.reset(); // Reset fields if they close it midway
        }
        appstate.saveToLocalStorage();
    });

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!appstate.currentProject) {
            alert("Please select or create a project first!");
            return;
        }

        const titleInput = document.getElementById("todo-title-input");
        const dateInput = document.getElementById("todo-date-input");
        const notesInput = document.getElementById("todo-notes-input");

        const newTodo = new MakeTodo(
            titleInput.value.trim(),
            dateInput.value,
            "",
            notesInput.value.trim()
        );

        appstate.currentProject.addTodo(newTodo);
        appstate.saveToLocalStorage();
        todoForm.reset();

        todoFormContainer.style.display = "none";
        toggleFormBtn.textContent = "+ New Task";
        toggleFormBtn.classList.remove("cancel-btn");

        renderTodos();
    });

    projectList.addEventListener('click', (e) => {
        const clickedElement = e.target;
        if (clickedElement.tagName === 'SPAN') {

            const targetProject = appstate.projects.find(p => p.title === clickedElement.textContent);

            if (targetProject) {
                appstate.currentProject = targetProject;
                appstate.saveToLocalStorage();
                renderTodos();
            }
        }
    });


    addProjectBtn.addEventListener('click', () => {
        const projectInput = document.getElementById("new-project-input");
        const projectName = projectInput.value.trim();

        if (projectName) {
            appstate.addProject(projectName);
            projectInput.value = "";
            appstate.saveToLocalStorage();
            renderProjects();
        }
    });
}

export { renderProjects, initDOMListeners, renderTodos };