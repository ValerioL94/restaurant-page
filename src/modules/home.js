function createHome() {
    const display = document.querySelector(".display");
    const home = document.createElement("h1");
    home.textContent = "Home";
    const p1 = document.createElement("p");
    p1.textContent = "Welcome to Forest Hut, a small piece of paradise in the middle of the forest!";
    const p2 = document.createElement("p");
    p2.textContent = "City life is stressing you? You miss the smell of fresh air and contact with nature? Say no more!";
    const p3 = document.createElement("p");
    p3.textContent = "Here at Forest Hut you can relax and taste our fabulous home-made dishes while enjoying the beautiful view of the lake.";
    const p4 = document.createElement("p");
    p4.textContent = "What are you waiting for? Come visit us anytime!";
    const p5 = document.createElement("p");
    p5.textContent = "Swimming and bathing in the lake are strictly prohibited";
    p5.classList.add("note");

    display.append(home, p1, p2, p3, p4, p5);
}

export default createHome;