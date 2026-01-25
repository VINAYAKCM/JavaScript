// Selecting DOM elements
const countText = document.querySelector("#countText");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");


// Initial events array
let events = [
  { id: 1, name: "Coldplay Concert" },
  { id: 2, name: "Stand-up Comedy" }
];

//Render function
function render(){
  list.innerHTML = "";

  //Count for number of events
  const count = events.length;
  countText.textContent = `${count} events available`;

  //Disable add button if 5 or more events
  addBtn.disabled = count >= 5;

  //If no events are available
  if (count === 0){
    const p = document.createElement("p");
    p.textContent = "No events available.";
    list.appendChild(p);
  }

  //Rendering each event
  events.forEach(event => {
    const div = document.createElement("div");
    div.classList.add('event');

    const span = document.createElement("span");
    span.textContent = event.name;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeEvent(event.id));

    div.appendChild(span);
    div.appendChild(removeBtn);
    list.appendChild(div);

  })

}

//Listen to add button click
addBtn.addEventListener("click", addEvent);

//Add Event function
function addEvent(){
  const input  = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter event name";

  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("confirmBtn");
  confirmBtn.textContent = "Add";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.textContent = "Cancel";

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inputDiv");
  inputDiv.appendChild(input);
  inputDiv.appendChild(confirmBtn);
  inputDiv.appendChild(cancelBtn);

  list.prepend(inputDiv);

  //Confirm adding event
  confirmBtn.addEventListener("click", () => {
    if (input.value.trim() !== ""){
      events = [...events, {id: Date.now(), name: input.value.trim()}];
      render();
    }
  });
}

//Remove Event function
function removeEvent(id){
  events = [...events.filter(event => event.id !== id)];
  render();
}

// Initial render
render();