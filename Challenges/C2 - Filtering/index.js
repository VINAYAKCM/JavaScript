const input = document.querySelector('#input');
const list = document.querySelector('#list');

const events = [
  { name: 'Music Concert', category: 'Music' },
  { name: 'Art Exhibition', category: 'Art' },
  { name: 'Tech Conference', category: 'Technology' },
  { name: 'Food Festival', category: 'Food' },
  { name: 'Dance Performance', category: 'Dance' },
];

let filteredEvents = events;        

//Render function
function Render(items){
    list.innerHTML = '';

    if (filteredEvents.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No events found';
        list.appendChild(p);
        return;
    }

    filteredEvents.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ${item.category}`;

        list.appendChild(div);
        div.classList.add('event-item');
    })
}   

//Input event listener
input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)
    );

    Render(filteredEvents);
});

// Initial render
Render(filteredEvents);