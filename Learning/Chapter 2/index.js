// 1. Get references to DOM elements
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const btn = document.querySelector('#button');

// 2. Raw data (never changes)
const events = [
  { name: "Coldplay Concert", city: "Mumbai" },
  { name: "Stand-up Comedy", city: "Bangalore" },
  { name: "Movie Night", city: "Delhi" },
  { name: "Art Exhibition", city: "Mumbai" }
];

// 3. State (what is currently visible)
let filteredEvents = events;

// 4. Render function (UI only)
function renderList(items) {
  list.innerHTML = "";

  if(items.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No events found.";
    list.appendChild(msg);
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.city}`;
    list.appendChild(div);
  });
}

// 5. Initial render
renderList(filteredEvents);

// 6. Listen to user typing
input.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(query)
    || event.city.toLowerCase().includes(query)
  );

  renderList(filteredEvents);
});

//Sorting logic
let sort = "asc";

function sortEvents(items) {
  return [...items].sort((a, b) => {
    if (sort === "asc"){
      return a.name.localeCompare(b.name);
    }
    else {
      return b.name.localeCompare(a.name);
    }
  });
}

// 7. Listen to button click for sorting

btn.addEventListener("click", () => {
  sort = sort === "asc" ? "desc" : "asc";
  btn.textContent = sort === "asc" ? "Sort A-Z" : "Sort Z-A";
  const sortedEvents = sortEvents(filteredEvents);
  renderList(sortedEvents);
})



