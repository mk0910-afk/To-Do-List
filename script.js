// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // Avoid empty tasks

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ''; // Clear input field
}
