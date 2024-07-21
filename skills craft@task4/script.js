// Task list array
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const task = {
            id: Date.now().toString(),
            text: taskText,
            completed: false,
            timestamp: new Date().toLocaleString()
        };

        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleCompleted('${task.id}')">${task.text}</span>
            <button onclick="editTask('${task.id}')">Edit</button>
            <button onclick="deleteTask('${task.id}')">Delete</button>
            <span class="date">${task.timestamp}</span>
        `;
        taskList.appendChild(li);
    });
}

// Function to toggle task completion status
function toggleCompleted(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Function to edit a task (not fully implemented in this basic version)
function editTask(id) {
    const newTaskText = prompt('Enter new task text:');
    const task = tasks.find(task => task.id === id);
    if (task && newTaskText) {
        task.text = newTaskText;
        renderTasks();
    }
}

// Initial rendering of tasks
renderTasks();
