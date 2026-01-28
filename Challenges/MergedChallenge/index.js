const toggleBtn = document.querySelector("#button");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");

let events = [
    {id:"1", name:"Coldplay", city:"Mumbai"},
    {id:"2", name:"One Direction", city:"Pune"},
    {id:"3", name:"Maroon 5", city:"Mumbai"},
    {id:"4", name:"Backstreet Boys", city:"Kochi"}
]

//States
let filteredEvents = events;
let toggleMumbai = false;
let selectedEventId = null;

//Render function
function Render(items){
    list.innerHTML = "";

    if(items.length === 0){
        const p = document.createElement("p");
        p.textContent = "No events available";
        list.appendChild(p);
        return;
    }

    items.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.name} - ${item.city}`;
        list.appendChild(div);
        div.classList.add("event")

        const span = document.createElement("span");
        span.textContent = item.name;
        div.appendChild(span);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        div.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {
            removeEvent(item.id)
        })

        if (item.id === selectedEventId) {
            div.classList.add("selected");
        }

        // 🔑 NEW: click handler per item
        div.addEventListener("click", () => {
            handleSelect(item.id);
        });

})
    
}

//Event Listening
input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    filteredEvents = events.filter(event => {
        return event.name.toLowerCase().includes(query) ||
        event.city.toLowerCase().includes(query)
    })
    Render(filteredEvents);
})

addBtn.addEventListener("click", addEvent);

toggleBtn.addEventListener("click", () => {
    toggleMumbai = !toggleMumbai;

    toggleBtn.textContent = toggleMumbai ? "Show all" : "Filter Mumbai";
    applyToggle()
})

//Functions
function applyToggle(){
    const visibleEvents = events.filter(event => {
        return !toggleMumbai || event.city === "Mumbai";
    })
    Render(visibleEvents)
}

function handleSelect(id){
    if (selectedEventId === id){
        selectedEventId = null;
    } else{
        selectedEventId = id;
    }
    Render(events)
}

function addEvent(){
    const newEvent = {
        id:Date.now(), name: "New event", city: " New city"
    };

    events = [...events, newEvent];
    Render(events)
}

function removeEvent(id){
    events = events.filter(event => event.id !== id);
    Render(events)
}

//Initial Render
Render(events);
