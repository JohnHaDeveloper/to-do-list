const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const todoList = document.querySelector('.todo-list');

// Add a new to-do item
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  const text = input.value.trim();
  if (text !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span class="todo-text">${text}</span>
      <button class="delete-btn">X</button>
    `;
    todoList.appendChild(li);
    input.value = ''; // Clear the input field
  }
});

// Mark a to-do item as completed
todoList.addEventListener('change', (event) => {
  const checkbox = event.target;
  if (checkbox.tagName === 'INPUT' && checkbox.type === 'checkbox') {
    const text = checkbox.nextElementSibling;
    if (checkbox.checked) {
      text.style.textDecoration = 'line-through';
    } else {
      text.style.textDecoration = 'none';
    }
  }
});

// Delete a to-do item
todoList.addEventListener('click', (event) => {
  const button = event.target;
  if (button.tagName === 'BUTTON' && button.classList.contains('delete-btn')) {
    const li = button.parentNode;
    todoList.removeChild(li);
  }
});
