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