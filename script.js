// Ensure script runs after HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new <li> for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When clicked → remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Attach remove button to li
        li.appendChild(removeBtn);

        // Add li to task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add task when button is clicked
    addButton.addEventListener("click", addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Call addTask on DOMContentLoaded (as required)
    addTask();
});
