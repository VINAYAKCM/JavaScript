/*CHALLENGE: 
Create a button that, when clicked, 
updates its text to show how many times it has been clicked.
It should also append a new paragraph to a container div each time it's clicked,
indicating the number of times the button has been clicked.
*/ 

const button = document.querySelector('button');
const container = document.querySelector('#container');


function buttonRender(count){
    button.textContent = `Clicked ${count} times`;

    const p = document.createElement('p');
    p.textContent = `Item ${count} added.`;
    container.appendChild(p);
}

let count = 0;
button.addEventListener('click', () => {
    count += 1;
    buttonRender(count);
})


