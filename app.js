// Step 1: Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Step 2: Function to create and add a new task to the list
function addTask(taskText) {
    if (taskText !== '') {
        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add a "Remove" button to each task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function () {
            li.remove(); // Remove the task when clicking the button
        });

        // Append the task and button to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
}

// Step 3: Add pre-created tasks on page load
addTask('besar a Matteo');
addTask('leave Matteo');

// Step 4: Add an event listener to the "Add Task" button
addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value; // Get the value of the input field
    addTask(taskText); // Add the new task using the function
    taskInput.value = ''; // Clear the input field after adding the task
});

