import './style.css';

import { loadHome } from './home-page/home.js';
import loadAbout  from './about-page/about.js'
import loadEvent from './events-page/event.js'
document.querySelector('#content').appendChild(loadHome());

function handleClick(e){
    const contentDiv = document.querySelector('#content');

    let load;
    const buttonClicked = e.target;
    if(buttonClicked.id === "home") load = loadHome();
    else if(buttonClicked.id === "about") load = loadAbout();
    else load = loadEvent();

    contentDiv.textContent='';
    contentDiv.appendChild(load);
}

const  homeBtn = document.querySelector("#home");
homeBtn.addEventListener('click', (e)=>handleClick(e));

const  eventBtn = document.querySelector("#event");
eventBtn.addEventListener('click', (e)=>handleClick(e));

const  aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener('click', (e)=>handleClick(e));
