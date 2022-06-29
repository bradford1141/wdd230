const resultElement = document.querySelector("#business");  
fetch('./json/data.json')
.then(response => response.json())
.then(businesses => {
    console.log(businesses);

    businesses = businesses.directory;
    businesses.forEach(business => {
        const section = document.createElement('section');
        section.setAttribute('class', 'card')

        const bname = document.createElement('h1');
        bname.textContent = `${business["business"]}`;

        const location = document.createElement('h2');
        location.textContent = `Location: ${business["address"]}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${business["email"]}`;

        const website = document.createElement('p');
        website.textContent = `Website: ${business["website"]}`;

        const image = document.createElement('img');
        image.setAttribute('src', `${business["image"]}`);
        image.setAttribute('alt', `${business["business"]}`);
        image.setAttribute('class', 'logos')

        section.appendChild(bname);
        section.appendChild(location);
        section.appendChild(email);
        section.appendChild(website);
        section.appendChild(image);
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