const url = ("https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json");
const resultElement = document.querySelector('.cards')

fetch(url)
.then (response => response.json())

.then (data => {
    const prophets = data['prophets']
    prophets.forEach(displayProphets);
})

function displayProphets(prophet){

    const section = document.createElement('section');
    const pname = document.createElement('h1');
    pname.textContent = `${prophet["name"]} ${prophet["lastname"]}`;
    const birthdate = document.createElement('h2');
    birthdate.textContent = `${prophet["birthdate"]}`;
    const birthplace = document.createElement('h3');
    birthplace.textContent = `${prophet["birthplace"]}`;
    const pimg = document.createElement('img');
    pimg.setAttribute('src', prophet["imageurl"]);
    pimg.setAttribute('alt', prophet["name"]);
    section.appendChild(pname);
    section.appendChild(birthdate);
    section. appendChild(birthplace);
    section.appendChild(pimg);
    resultElement.appendChild(section);}