// home.js
export default function loadHome() {
    const container = document.createElement("div"); // New div
    const heading = document.createElement("h1");
    heading.textContent = "This is the Home Page";
    container.appendChild(heading); // append inside the new div
    return container; // return the new div
}
