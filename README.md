cat > README.md << 'EOF'
# Dynamic To-Do List Application

A simple, interactive To-Do List web application built with vanilla JavaScript, HTML, and CSS. This project demonstrates advanced DOM manipulation techniques for creating, displaying, and removing tasks dynamically.

## Project Description

This To-Do List application allows users to manage their daily tasks efficiently. Users can add new tasks, view them in a list, and remove completed tasks with a single click. The application features a clean, modern interface with responsive design.

## Features

- ✅ **Add Tasks**: Enter new tasks via input field
- ✅ **Multiple Input Methods**: Add tasks by clicking the button or pressing Enter
- ✅ **Remove Tasks**: Delete tasks individually with Remove button
- ✅ **Input Validation**: Alerts user when trying to add empty tasks
- ✅ **Auto-Clear Input**: Input field clears automatically after adding a task
- ✅ **Responsive Design**: Clean, centered layout that works on all screen sizes
- ✅ **Interactive UI**: Hover effects and smooth user experience

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, flexbox layout, and visual design
- **JavaScript (Vanilla)**: DOM manipulation and event handling

## File Structure
```
dynamic-to-do-list-js/
│
├── index.html       # Main HTML structure
├── styles.css       # Styling and layout
├── script.js        # Application logic and DOM manipulation
└── README.md        # Project documentation
```

## Installation & Setup

1. **Clone the repository**:
```bash
   git clone https://github.com/YOUR_USERNAME/dynamic-to-do-list-js.git
```

2. **Navigate to the project directory**:
```bash
   cd dynamic-to-do-list-js
```

3. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development

## How to Use

1. **Add a Task**:
   - Type your task in the input field
   - Click the "Add Task" button OR press Enter
   - The task will appear in the list below

2. **Remove a Task**:
   - Click the "Remove" button next to any task
   - The task will be deleted from the list

3. **Empty Task Prevention**:
   - If you try to add an empty task, an alert will prompt you to enter a task

## Code Structure

### JavaScript Implementation

The application uses the following key components:

- **Event Listeners**: 
  - `DOMContentLoaded` to ensure DOM is ready
  - Click event on "Add Task" button
  - Keypress event for Enter key functionality

- **DOM Manipulation**:
  - `createElement()` to create new list items and buttons
  - `appendChild()` to add elements to the DOM
  - `removeChild()` to delete tasks

- **Input Validation**:
  - Checks for empty input using `trim()`
  - Provides user feedback via `alert()`

### Key Functions
```javascript
function addTask() {
    // Retrieves task input
    // Validates input
    // Creates task element
    // Adds remove functionality
    // Appends to task list
    // Clears input field
}
```

## User Interface

- **Clean Design**: Minimalist white card on gray background
- **Color Scheme**: 
  - Primary blue (#007bff) for actions
  - Red (#ff6347) for remove buttons
  - Light gray (#f0f0f0) for background
- **Typography**: Arial sans-serif for readability
- **Spacing**: Comfortable padding and margins

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Learning Objectives

This project demonstrates:
- Advanced DOM manipulation techniques
- Event handling (click and keyboard events)
- Dynamic element creation and removal
- Input validation and user feedback
- CSS flexbox layout
- Responsive design principles
- Clean code structure and organization

## Future Enhancements

Potential improvements for the application:
- [ ] Local storage to persist tasks across sessions
- [ ] Edit task functionality
- [ ] Mark tasks as complete with strikethrough
- [ ] Filter tasks (all, active, completed)
- [ ] Task priority levels with color coding
- [ ] Drag and drop to reorder tasks
- [ ] Due dates and reminders
- [ ] Categories or tags for tasks
- [ ] Search/filter functionality
- [ ] Dark mode toggle
- [ ] Task counter
- [ ] Clear all tasks button

## Development

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript
- A modern web browser
- A code editor (VS Code, Sublime Text, etc.)

### Running Locally
No build process required! Simply open `index.html` in your browser.

## Contributing

This is a learning project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

Created as part of the ALX Software Engineering Program.

## License

This project is open source and available for educational purposes.

## Acknowledgments

- ALX Africa for the project requirements and learning support
- The web development community for best practices
- JSONPlaceholder for providing free API endpoints for testing

## Screenshots

### Main Interface
- Clean input field for entering tasks
- Blue "Add Task" button
- List of tasks with individual remove buttons

### Features in Action
- Alert message when attempting to add empty task
- Hover effects on buttons
- Smooth task addition and removal

---

**Happy Task Managing!** ✨

For questions or feedback, please open an issue in the repository.
EOF
