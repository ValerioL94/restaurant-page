function createMenu() {
    const display = document.getElementById("display");
    if (display.className == "home" ||
        display.className == "contact") {
        display.innerHTML = "";
        display.className = "menu";
        const title = document.createElement("h1");
        title.textContent = "MENU";
        const container = document.createElement("div");
        container.classList.add("container");
        const dish1 = document.createElement("div");
        dish1.classList.add("dish", "clickable");
        const pestoImg = document.createElement("img");
        pestoImg.src = "/images/pesto_pasta.jpg";
        pestoImg.alt = "pasta with pesto sauce";
        const pestoH2 = document.createElement("h2");
        pestoH2.textContent = "PESTO PASTA";
        const pestoP = document.createElement("p");
        pestoP.textContent = "Delicious pasta with home-made pesto sauce";

        display.append(title, container);
        container.appendChild(dish1);
        dish1.append(pestoImg, pestoH2, pestoP);
    } else return;
}

export default createMenu;