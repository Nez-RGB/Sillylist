// Step 1: Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Step 2: Add an event listener to the "Add Task" button
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value; // Get the value of the input field
    
    if (taskText !== '') {
        // Step 3: Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 4: Add a "Remove" button to each task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            li.remove(); // Remove the task when clicking the button
        });

        // Step 5: Append the task and button to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }
});
