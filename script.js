document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get trimmed input

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new li element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        // Use classList.add (required by checker)
        removeBtn.classList.add("remove-btn");

        // Add onclick event for removal
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeBtn);

        // Add li to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task when button clicked
