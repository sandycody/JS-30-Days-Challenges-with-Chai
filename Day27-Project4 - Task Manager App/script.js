document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('container');
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    loadTasks();

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';

            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Due Date: ${task.dueDate}</p>
                <div class="buttons">
                    <button class="edit" onclick="editTask(${index})">Edit</button>
                    <button class="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(taskElement);
            scrollToBottom();
        });
    }

    window.editTask = function (index) {
        const task = tasks[index];
        document.getElementById('title').value = task.title;
        document.getElementById('description').value = task.description;
        document.getElementById('dueDate').value = task.dueDate;

        taskForm.onsubmit = function (event) {
            event.preventDefault();
            task.title = document.getElementById('title').value;
            task.description = document.getElementById('description').value;
            task.dueDate = document.getElementById('dueDate').value;
            saveTasks();
            displayTasks();
            taskForm.reset();
            taskForm.onsubmit = taskFormSubmissionHandler;
        }
    }

    window.deleteTask = function (index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        }
    }

    function taskFormSubmissionHandler(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;

        const newTask = { title, description, dueDate };
        tasks.push(newTask);
        saveTasks();
        displayTasks();
        taskForm.reset();
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            displayTasks();
        }
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function scrollToBottom() {
        container.scrollTop = container.scrollHeight;
    }

    taskForm.onsubmit = taskFormSubmissionHandler;
});
