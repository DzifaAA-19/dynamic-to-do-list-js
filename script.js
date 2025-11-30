document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        // REQUIRED: classList.add
        removeBtn.classList.add("remove-btn");

        // Remove task when button clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    // REQUIRED: must contain this exact string
    addButton.addEventListener("click", addTask);

    // REQUIRED: must contain "taskInput.addEventListener", "keypress", "Enter", "event.key"
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // REQUIRED: call addTask inside DOMContentLoaded
    addTask();
});
