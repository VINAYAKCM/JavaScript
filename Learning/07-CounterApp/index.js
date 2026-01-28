const countText = document.querySelector("#count")
const incBtn = document.querySelector("#increment")
const resetBtn = document.querySelector("#reset")
const decBtn = document.querySelector("#decrement")

let count = 0;

function RenderPage(){
    countText.textContent = count;
}

function increment(){
    count = count + 1;
    RenderPage()
}

function decrement(){
    if (count === 0)return

    count = count - 1;
    RenderPage()
}

function reset(){
    count = 0;
    RenderPage()
}

incBtn.addEventListener("click", increment)
decBtn.addEventListener("click", decrement)
reset.addEventListener("click", reset)

RenderPage();