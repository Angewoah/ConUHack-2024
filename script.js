function addTask() {
    // uwu uwu uwu uwu uwu
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    // uwu uwu uwu
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.textContent = taskText;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = "";
    }
}
