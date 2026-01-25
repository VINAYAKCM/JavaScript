// DOM elements
const list = document.querySelector("#list");
const toggleBtn = document.querySelector("#toggleBtn");

// Raw data
const events = [
  { name: "Coldplay Concert", city: "Mumbai" },
  { name: "Stand-up Comedy", city: "Bangalore" },
  { name: "Movie Night", city: "Delhi" },
  { name: "Art Exhibition", city: "Mumbai" }
];

// State
let showMumbaiOnly = false;

// Render function
function renderList(items) {
  list.innerHTML = "";

  if (items.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No events found";
    list.appendChild(p);
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.city}`;
    list.appendChild(div);
  });
}

// Apply toggle filter
function applyToggle() {
  const visibleEvents = events.filter(event => {
    return !showMumbaiOnly || event.city === "Mumbai";
  });

  renderList(visibleEvents);
}

// Initial render
applyToggle();

// Button → state → render
toggleBtn.addEventListener("click", () => {
  showMumbaiOnly = !showMumbaiOnly;

  toggleBtn.textContent = showMumbaiOnly
    ? "Show all events"
    : "Show only Mumbai";

  applyToggle();
});
