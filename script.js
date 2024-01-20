// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("active");
}

// Function to add a new task to the to-do list
function addTask() {
    // Get the input element where the user enters the task
    const taskInput = document.getElementById("taskInput");
    
    // Get the cleaned text (trim leading/trailing whitespace) from the input
    const taskText = taskInput.value.trim();

    // Check if the entered task is not empty
    if (taskText !== "") {
        // Get the to-do list (unordered list) element by its id
        const taskList = document.getElementById("taskList");
        
        // Create a new list item element to represent the task
        const li = document.createElement("li");
        
        // Set the text content of the list item to the task description
        li.textContent = taskText;
        
        // Create a "Delete" button element for removing the task
        const deleteButton = document.createElement("button");
        
        // Set the text content of the "Delete" button
        deleteButton.textContent = "Delete";
        
        // Add a click event listener to the "Delete" button
        deleteButton.addEventListener("click", () => {
            // When clicked, remove the corresponding list item (task) from the list
            li.remove();
        });
        
        // Append the "Delete" button as a child of the list item
        li.appendChild(deleteButton);
        
        // Append the list item (task) to the to-do list
        taskList.appendChild(li);
        
        // Clear the input field for entering the next task
        taskInput.value = "";
    }
}

// Function to delete all tasks
function deleteAllTasks() {
    var taskList = document.getElementById('taskList');
    
    // Remove all child elements (tasks) from the taskList
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}


