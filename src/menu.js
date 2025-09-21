// about.js
export default function loadMenu() {
    const container = document.createElement("div"); // New div
    const heading = document.createElement("h1");
    heading.textContent = "This is the Menu Page";
    container.appendChild(heading); // append inside the new div
    return container; // return the new div
}
