// 1. DOM references
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const countText = document.querySelector("#countText");

// 2. State
let todos = [];

// 3. Render function (UI is derived from state)
function render() {
  // Derived state
  const count = todos.length;

  // Update count text
  countText.textContent = `${count} task${count !== 1 ? "s" : ""} remaining`;

  // Clear previous UI
  list.innerHTML = "";

  // Empty state
  if (count === 0) {
    const p = document.createElement("p");
    p.textContent = "No tasks yet";
    list.appendChild(p);
    return;
  }

  // Render each todo
  todos.forEach(todo => {
    const div = document.createElement("div");
    div.classList.add("todo");

    const span = document.createElement("span");
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      removeTodo(todo.id);
    });

    div.appendChild(span);
    div.appendChild(deleteBtn);
    list.appendChild(div);
  });
}

// 4. Add todo
function addTodo() {
  const text = input.value.trim();

  // Guard against empty input
  if (text === "") return;

  const newTodo = {
    id: Date.now(),
    text: text
  };

  // Update state immutably
  todos = [...todos, newTodo];

  // Clear input
  input.value = "";

  // Re-render UI
  render();
}

// 5. Remove todo
function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  render();
}

// 6. Event listeners
addBtn.addEventListener("click", addTodo);

// 7. Initial render
render();
