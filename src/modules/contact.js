function createContact() {
    const display = document.getElementById("display");
    if (display.className == "home" ||
        display.className == "menu") {
        display.innerHTML = "";
        display.className = "contact";

        const title = document.createElement("h1");
        title.textContent = "CONTACT INFO";

        const container = document.createElement("div");
        container.classList.add("container");

        const info = document.createElement("div");
        info.classList.add("info");

        const phone = document.createElement("div");
        const phoneH3 = document.createElement("h3");
        phoneH3.textContent = "Telephone number";
        const phoneP = document.createElement("p");
        phoneP.textContent = "555-8888-555";

        const address = document.createElement("div");
        const addressH3 = document.createElement("h3");
        addressH3.textContent = "Address";
        const addressP = document.createElement("p");
        addressP.textContent = "Isle Royale, Michigan, USA";

        const hours = document.createElement("div");
        const hoursH3 = document.createElement("h3");
        hoursH3.textContent = "Opening Hours";
        const hoursP1 = document.createElement("p");
        hoursP1.textContent = "Mon-Thurs: 8am-8pm";
        const hoursP2 = document.createElement("p");
        hoursP2.textContent = "Fri-Sun: 8am-11pm";
        const hoursP3 = document.createElement("p");
        hoursP3.textContent = "*Sundays by reservation only";
        hoursP3.style.fontWeight = "600";

        const map = document.createElement("div");
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d49775.798691976066!2d-88.82850838807937!3d48.003275526775724!3m2!1i1024!2i768!4f13.1!2m1!1sAmerica%2C%20forest!5e1!3m2!1sen!2sit!4v1703927932381!5m2!1sen!2sit";
        iframe.width = "400";
        iframe.height = "300";
        iframe.style = "border:0;";
        iframe.allowfullscreen = "";
        iframe.loading = "lazy";
        iframe.referrerpolicy = "no-referrer-when-downgrade";

        display.append(title, container);
        container.append(info, map);
        info.append(phone, address, hours);
        phone.append(phoneH3, phoneP);
        address.append(addressH3, addressP);
        hours.append(hoursH3, hoursP1, hoursP2, hoursP3);
        map.appendChild(iframe);

    } else return;
}

export default createContact;
