

import { loadHome } from './home-page/home.js';
import  loadAbout  from './about-page/about.js'


const contentDiv = document.querySelector('#content');


const homeTab = loadHome();
const aboutTab = loadAbout();
contentDiv.appendChild(aboutTab);