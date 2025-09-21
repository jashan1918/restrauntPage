import './style.css'

import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadAbout from "./about.js"

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';

}

function loadPage(pageFn) {
  clearContent();
  const content = document.getElementById('content');
  content.appendChild(pageFn());
}



// Add listeners to buttons
document.getElementById('home').addEventListener('click', () => loadPage(loadHome));
document.getElementById('menu').addEventListener('click', () => loadPage(loadMenu));
document.getElementById('about').addEventListener('click', () => loadPage(loadAbout));

// Default on load
loadPage(loadHome);