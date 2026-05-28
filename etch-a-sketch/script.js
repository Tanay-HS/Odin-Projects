const container = document.querySelector(".content");
const btn = document.querySelectorAll("button");

let boxs = 16;

function makeBoxes(){
    container.textContent = "";

    function getBoxesCount(){
        let num = prompt("How many boxes in a side");
        if(num <= 100) boxs = num;
        else{
            alert("You cant enter more than 100");
            getBoxesCount();
        }
    }
    getBoxesCount();
    
    const  boxSize = 500/boxs;
    for(let i = 0; i<boxs*boxs ; i++){
        const newBox = document.createElement("div");
        newBox.classList.add('box') //Make a box class;


        newBox.style.height = `${boxSize}px`;
        newBox.style.width = `${boxSize}px`;

        container.appendChild(newBox);
    }
}

container.addEventListener('mouseover',(e) =>{

    if(e.target.classList.contains('box'))
    e.target.style.backgroundColor = "black";
} )

function reset(){
    for(let child of container.children){
        child.style.backgroundColor = "whitesmoke";
    }
}

const waste = () => {}

btn[0].addEventListener('click', makeBoxes);
btn[1].addEventListener('click', reset);