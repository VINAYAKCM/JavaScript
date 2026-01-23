// Events and Manipulating DOM Elements & Creating elements dynamically
const button = document.querySelector("#myButton")

let count = 0

function renderButton(){
    button.textContent = `Clicked ${count} times`
    const container = document.querySelector("#container")
    const p = document.createElement("p")
    p.textContent = `Button clicked ${count} times`
    container.appendChild(p)
}

button.addEventListener("click", () => {
    count = count + 1
    renderButton()
})

//------------------------------------------------------


const input = document.querySelector("#nameInput")
const output = document.querySelector("#output")

input.addEventListener("input", (e) => {
    output.textContent = e.target.value
})






















/*
const event1 = [
  { name: "Concert", price: 500 },
  { name: "Movie", price: 200 },
  { name: "Play", price: 300 }
]

//Mapping through events to get their names
const prices = event1.map(e => e.price)
console.log(prices);

// Filtering events with price greater than 250
const cheapEvents = event1.filter(e => e.price > 250)
console.log(cheapEvents);

//Find first event with price 200
const searchedEvent = event1.find(e => e.price === 200)
console.log(searchedEvent);

//------------------------------------------------------

//Object Destructuring
const user = {
  name: "Vinayak",
  address: {
    city: "Bangalore",
    country: "India"
  }
};

const { name, 
  address: { city, country }
} = user;

console.log(city);    
console.log(country);
console.log(name); 

//------------------------------------------------------

//DOM Manipulation

const input = document.querySelector("#search")
const list = document.querySelector(".list")

document.getElementById("myButton").addEventListener("click", function() {
  alert("Button was clicked!");
});

*/