const resultElement = document.querySelector("#temples");  
fetch('./json/temples.json')
.then(response => response.json())
.then(businesses => {
    console.log(businesses);

    businesses = businesses.directory;
    businesses.forEach(business => {
        const section = document.createElement('section');
        section.setAttribute('class', 'card')

        const bname = document.createElement('h1');
        bname.textContent = `${business["temple"]}`;

        const location = document.createElement('h2');
        location.textContent = `Location: ${business["address"]}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${business["email"]}`;

        const website = document.createElement('p');
        website.textContent = `Website: ${business["website"]}`;

        const services = document.createElement('p');
        services.textContent = `Services: ${business["services"]}`;

        const closures = document.createElement('p');
        closures.textContent = `Closures ${business["closures"]}`;

        const closures2 = document.createElement('p');
        closures2.textContent = `Closures ${business["closures2"]}`;

        const ordinance = document.createElement('p');
        ordinance.textContent = `Ordinance: ${business["ordinance"]}`;

        const session = document.createElement('p');
        session.textContent = `Session: ${business["session"]}`;

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${business["dedicated"]}`;

        const image = document.createElement('img');
        image.setAttribute('src', `${business["image"]}`);
        image.setAttribute('alt', `${business["temple"]}`);
        image.setAttribute('class', 'logos')

        section.appendChild(bname);
        section.appendChild(location);
        section.appendChild(email);
        section.appendChild(website);
        section.appendChild(image);
        section.appendChild(dedicated);
        section.appendChild(services);
        section.appendChild(closures);
        section.appendChild(closures2);
        section.appendChild(ordinance);
        section.appendChild(session);
        resultElement.appendChild(section);

    })

})

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}