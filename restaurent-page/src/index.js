

import { loadHome } from './home-page/home.js';
import loadAbout  from './about-page/about.js'
import loadEvent from './events-page/event.js'


const contentDiv = document.querySelector('#content');


const homeTab = loadHome();
const aboutTab = loadAbout();
const eventTab = loadEvent();
contentDiv.appendChild(eventTab);