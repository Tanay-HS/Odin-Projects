

import { loadHome } from './home-page/home.js';


const contentDiv = document.querySelector('#content');


const homeTab = loadHome();
contentDiv.appendChild(homeTab);