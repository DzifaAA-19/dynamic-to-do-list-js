// Run after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements (ensure these IDs match your HTML)
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Safety: if any required element is missing, log and stop
  if (!addButton || !taskInput || !taskList) {
    console.error("Required DOM elements not found. Check element IDs in HTML.");
    return;
  }

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // If empty -> alert and bail out
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create the list item and set its text
    const li = document.createElement("li");

    // Create a span to hold the task text (so button doesn't become part of text)
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.setAttribute("aria-label", `Remove task: ${taskText}`);

    // Attach remove handler (use addEventListener instead of onclick)
    removeBtn.addEventListener("click", () => {
      // Remove the li from the taskList
      taskList.removeChild(li);
    });

    // Build li: text span + remove button
    li.appendChild(span);
    li.appendChild(removeBtn);

    // Append to the list
    taskList.appendChild(li);

    // Clear and focus input for next task
    taskInput.value = "";
    taskInput.focus();
  }

  // Add task when add button clicked
  addButton.addEventListener("click", addTask);

  // Add task when Enter key pressed while input is focused
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // prevent form submission / page reload
      addTask();
    }
  });

  // Optional: allow removing via delegation (works even if buttons are added later)
  // (Not necessary with current approach, but helpful for alternative implementations)
  // taskList.addEventListener('click', (e) => {
  //   if (e.target && e.target.classList.contains('remove-btn')) {
  //     const li = e.target.closest('li');
  //     if (li) li.remove();
  //   }
  // });
});
