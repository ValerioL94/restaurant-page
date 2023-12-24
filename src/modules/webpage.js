function createHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Forest Hut";
    const nav = document.createElement("nav");
    const home = document.createElement("button");
    home.classList.add("home");
    home.textContent = "Home";
    const menu = document.createElement("button");
    menu.classList.add("menu");
    menu.textContent = "Menu";
    const contact = document.createElement("button");
    contact.classList.add("contact");
    contact.textContent = "Contact"

    header.appendChild(h1);
    header.appendChild(nav);
    nav.append(home, menu, contact);

    return header;
}

function createMain() {
    const main = document.createElement("main");
    const display = document.createElement("div");
    display.classList.add("display");
    main.appendChild(display);

    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    const copyright = document.createElement("p");
    copyright.classList.add("copyright");
    copyright.textContent = "Copyright © 2023 ";
    const link = document.createElement("a");
    link.href = "https://github.com/ValerioL94";
    const span = document.createElement("span");
    span.textContent = "ValerioL94";

    footer.appendChild(copyright);
    copyright.appendChild(link);
    link.appendChild(span);

    return footer;
}

function initPage() {
    const body = document.querySelector("body");
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    body.appendChild(content);
    content.append(createHeader(), createMain(), createFooter());
}

export default initPage;