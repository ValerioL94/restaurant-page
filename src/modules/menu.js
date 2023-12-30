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
        const dish1Img = document.createElement("img");
        dish1Img.src = "/images/pesto_pasta.jpg";
        dish1Img.alt = "pasta with pesto sauce";
        const dish1H2 = document.createElement("h2");
        dish1H2.textContent = "PESTO PASTA";
        const dish1P = document.createElement("p");
        dish1P.textContent = "Delicious pasta with home-made pesto sauce";

        const dish2 = document.createElement("div");
        dish2.classList.add("dish", "clickable");
        const dish2Img = document.createElement("img");
        dish2Img.src = "/images/salad.jpg";
        dish2Img.alt = "fruit salad";
        const dish2H2 = document.createElement("h2");
        dish2H2.textContent = "FRUIT SALAD";
        const dish2P = document.createElement("p");
        dish2P.textContent = "Fresh salad with fruits of your choice";

        const dish3 = document.createElement("div");
        dish3.classList.add("dish", "clickable");
        const dish3Img = document.createElement("img");
        dish3Img.src = "/images/steak.jpg";
        dish3Img.alt = "cooked beef steak";
        const dish3H2 = document.createElement("h2");
        dish3H2.textContent = "BEEF STEAK";
        const dish3P = document.createElement("p");
        dish3P.textContent = "Beef steak, local meat only!";

        const dish4 = document.createElement("div");
        dish4.classList.add("dish", "clickable");
        const dish4Img = document.createElement("img");
        dish4Img.src = "/images/salmon.jpg";
        dish4Img.alt = "grilled salmon";
        const dish4H2 = document.createElement("h2");
        dish4H2.textContent = "GRILLED SALMON";
        const dish4P = document.createElement("p");
        dish4P.textContent = "Fresh salmon, straight from the lake!";

        const dish5 = document.createElement("div");
        dish5.classList.add("dish", "clickable");
        const dish5Img = document.createElement("img");
        dish5Img.src = "/images/fruit_cake.jpg";
        dish5Img.alt = "fruit cake";
        const dish5H2 = document.createElement("h2");
        dish5H2.textContent = "FRUIT CAKE";
        const dish5P = document.createElement("p");
        dish5P.textContent = "Home-made fruit cake";

        const dish6 = document.createElement("div");
        dish6.classList.add("dish", "clickable");
        const dish6Img = document.createElement("img");
        dish6Img.src = "/images/hamburger_with_fries.jpg";
        dish6Img.alt = "hamburger with french fries";
        const dish6H2 = document.createElement("h2");
        dish6H2.textContent = "HAMBURGER & FRIES";
        const dish6P = document.createElement("p");
        dish6P.textContent = "Hamburger with french fries, perfect for kids!";

        display.append(title, container);
        container.append(dish1, dish2, dish3, dish4, dish5, dish6);
        dish1.append(dish1Img, dish1H2, dish1P);
        dish2.append(dish2Img, dish2H2, dish2P);
        dish3.append(dish3Img, dish3H2, dish3P);
        dish4.append(dish4Img, dish4H2, dish4P);
        dish5.append(dish5Img, dish5H2, dish5P);
        dish6.append(dish6Img, dish6H2, dish6P);
    } else return;
}

export default createMenu;