// DOM elements
const input = document.querySelector("#input");
const list = document.querySelector("#list");

// Raw data (never mutate)
const events = [
  { name: "Coldplay Concert", city: "Mumbai" },
  { name: "Stand-up Comedy", city: "Bangalore" },
  { name: "Movie Night", city: "Delhi" },
  { name: "Art Exhibition", city: "Mumbai" }
];

// State
let filteredEvents = events;

// Render function (UI only)
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

// Initial render
renderList(filteredEvents);

// Input → state → render
input.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(query) ||
    event.city.toLowerCase().includes(query)
  );

  renderList(filteredEvents);
});
