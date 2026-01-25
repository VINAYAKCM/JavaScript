// 1. DOM reference
const list = document.querySelector("#list");

// 2. Raw data (now with IDs)
const events = [
  { id: "coldplay", name: "Coldplay Concert", city: "Mumbai" },
  { id: "comedy", name: "Stand-up Comedy", city: "Bangalore" },
  { id: "movie", name: "Movie Night", city: "Delhi" },
  { id: "art", name: "Art Exhibition", city: "Mumbai" }
];

// 3. Selection state (NEW)
let selectedEventId = null;

// 4. Render function
function renderList() {
  list.innerHTML = "";

  events.forEach(event => {
    const div = document.createElement("div");
    div.textContent = `${event.name} - ${event.city}`;
    div.classList.add("event");

    // 🔑 NEW: conditional styling based on state
    if (event.id === selectedEventId) {
      div.classList.add("selected");
    }

    // 🔑 NEW: click handler per item
    div.addEventListener("click", () => {
      handleSelect(event.id);
    });

    list.appendChild(div);
  });
}

// 5. Selection logic (NEW)
function handleSelect(id) {
  if (selectedEventId === id) {
    selectedEventId = null; // deselect
  } else {
    selectedEventId = id;   // select
  }

  renderList();
}

// 6. Initial render
renderList();
