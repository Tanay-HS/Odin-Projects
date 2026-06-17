
import './home.css';
import ramenImgSource from './home.jpg'; 

export function loadHome() {
    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-tab-content'; 

    const img = document.createElement('img');
    img.src = ramenImgSource; 
    img.alt = 'Bad Bones Ramen Shop';
    homeContainer.appendChild(img);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to BAD BONES';
    homeContainer.appendChild(headline);

    const p1 = document.createElement('p');
    p1.textContent = 'Crafted to excite, to challenge, to explore';
    homeContainer.appendChild(p1);

    const divider1 = document.createElement('p');
    divider1.textContent = '------------------------------------------';
    homeContainer.appendChild(divider1);

    const p2 = document.createElement('p');
    p2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui voluptatibus mollitia aut? Expedita iusto, repellendus tempora officia earum odit dolor eum facere temporibus praesentium nulla hic at repudiandae!';
    homeContainer.appendChild(p2);

    const divider2 = document.createElement('p');
    divider2.textContent = '------------------------------------------';
    homeContainer.appendChild(divider2);

    const p3 = document.createElement('p');
    const em = document.createElement('em');
    em.textContent = 'we are meant for each other';
    p3.appendChild(em);
    homeContainer.appendChild(p3);

    return homeContainer;
}

export default loadHome;