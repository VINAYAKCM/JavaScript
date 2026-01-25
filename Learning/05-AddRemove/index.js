// 1. DOM references
const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");

// 2. State (array we will modify)
let events = [
  { id: 1, name: "Coldplay Concert" },
  { id: 2, name: "Stand-up Comedy" }
];

// 3. Render function
function renderList() {
  list.innerHTML = "";

  if (events.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No events available";
    list.appendChild(p);
    return;
  }

  events.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event");

    const span = document.createElement("span");
    span.textContent = event.name;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      removeEvent(event.id);
    });

    div.appendChild(span);
    div.appendChild(removeBtn);
    list.appendChild(div);
  });
}

// 4. Add event logic
function addEvent() {
  const newEvent = {
    id: Date.now(),
    name: "New Event"
  };

  events = [...events, newEvent];
  renderList();
}

// 5. Remove event logic - For each event in the array, 
// it checks if event.id is not equal (!==) to the id 
// passed to the removeEvent function. If the condition 
// is true (i.e., the IDs don't match), the event is 
// kept in the new array. If false (IDs match), the 
// event is excluded.
function removeEvent(id) {
  events = events.filter(event => event.id !== id);
  renderList();
}

// 6. Button listener
addBtn.addEventListener("click", addEvent);

// 7. Initial render
renderList();
