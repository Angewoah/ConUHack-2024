// Function to toggle the dropdown menu
function toggleDropdown() {
    console.log("Dropdown clicked");
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("active");
}

// Function to add a new task to the to-do list
function addTask() {
    // This function will show the modal
    var modal = document.getElementById('addTaskModal'); // Corrected ID
    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    var allDayCheck = document.getElementById('allDayCheck');
    var dailyCheck = document.getElementById('dailyCheck');
    var taskTime = document.getElementById('taskTime');
    var taskDate = document.getElementById('taskDate');
    var taskDescription = document.getElementById('taskDescription');
    var newTaskForm = document.getElementById('newTaskForm');

    // Disable time input when 'All Day' is checked
    allDayCheck.addEventListener('change', function() {
        if (this.checked) {
            taskTime.disabled = true;
            taskTime.style.backgroundColor = '#e0e0e0'; // grey out
        } else {
            taskTime.disabled = false;
            taskTime.style.backgroundColor = ''; // revert style
        }
    });

    // Disable date input when 'Daily' is checked
    dailyCheck.addEventListener('change', function() {
        if (this.checked) {
            taskDate.disabled = true;
            taskDate.style.backgroundColor = '#e0e0e0'; // grey out
        } else {
            taskDate.disabled = false;
            taskDate.style.backgroundColor = ''; // revert style
        }
    });

    // Form submission event listener
    newTaskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submit action

        // Simple validation
        var isAllDay = allDayCheck.checked;
        var isDaily = dailyCheck.checked;
        var descriptionFilled = taskDescription.value.trim() !== '';
        var timeFilled = taskTime.value.trim() !== '';
        var dateFilled = taskDate.value.trim() !== '';

        if (!descriptionFilled) {
            alert('Please fill out the task description.');
            return;
        }

        if (!isAllDay && !timeFilled) {
            alert('Please fill out the task time or check "All Day".');
            return;
        }

        if (!isDaily && !dateFilled) {
            alert('Please fill out the task date or check "Daily Task".');
            return;
        }

        // If validation passes, proceed to add the task
        var taskDisplayText = taskDescription.value + ' - ' + (isAllDay ? 'All-day' : taskTime.value);
        var taskDueDate = isDaily ? 'Daily' : taskDate.value;
        
        insertNewTask(taskDisplayText, taskDueDate);

        // Hide the modal
        var modal = document.getElementById('addTaskModal');
        modal.style.display = 'none';
    });
});

// Function to insert the new task into the DOM
function insertNewTask(taskDisplayText, taskDate) {
    var taskList = document.getElementById('taskList');
    var newTaskItem = document.createElement('li');
    
    // Assuming you want the date to show as well, we'll add that
    newTaskItem.textContent = `${taskDisplayText}`;
    taskList.appendChild(newTaskItem);
}


// Function to delete all tasks
function deleteAllTasks() {
    var taskList = document.getElementById('taskList');
    
    // Remove all child elements (tasks) from the taskList
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Add event listener to settings icon for dropdown
document.getElementById("settingsIcon").addEventListener("click", toggleDropdown);

