import initPage from './modules/webpage.js';
import createHome from './modules/home.js';
import createMenu from './modules/menu.js';
import createContact from './modules/contact.js';
import './styles.css';

function importAll(r) {
    r.keys().forEach(r)
}
importAll(require.context('/src/images', false, /\.jpg$/));

function addButtons() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

    homeBtn.addEventListener("click", createHome);
    menuBtn.addEventListener("click", createMenu);
    contactBtn.addEventListener("click", createContact);
}

(function loadPage() {
    initPage();
    createHome();
    addButtons();
})();
