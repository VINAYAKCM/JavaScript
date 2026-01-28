const toggleButton = document.querySelector("#toggleButton");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

let showMumbaiOnly = false;
let filteredEvents = []

const events = [
  { name: "Concert", city: "Mumbai" },
  { name: "Theater", city: "Delhi" },
  { name: "Exhibition", city: "Mumbai" },
  { name: "Festival", city: "Chennai" }
];

//Render function
function Render(items){
    list.innerHTML = '';

    if(items.length === 0){
        const p = document.createElement('p');
        p.textContent = "No events found";
        list.appendChild(p);
        return;
    }

    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ${item.city}`;
        list.appendChild(div);
    })
    
}

//Toggle function
function toggle(){
    const visibleEvents = events.filter(event => {
        return !showMumbaiOnly || event.city === "Mumbai";
    })

    Render(visibleEvents);
}

//Listen to button click
toggleButton.addEventListener('click', () => {
    showMumbaiOnly = !showMumbaiOnly;
    toggleButton.textContent = showMumbaiOnly ? "Show all" : "Filter Mumbai";

    toggle();
})

//Listen to input change
input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    filteredEvents = events.filter(event => 
        event.name.toLowerCase().includes(query) ||
        event.city.toLowerCase().includes(query)
    )
    Render(filteredEvents);
});

//Initial render
Render(events);

