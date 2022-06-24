fetch("https://byui-cit230.github.10/canvas-referenced/latter-day-prophets.json")
const resultElement = document.querySelector('.cards')
.then (response => response.json())
.then( prophets => {
    console.log (prophets);

    prophets = prophets.prophets;
    prophets.forEach( prophet => {
    const section = document.createElement ('section');
    section.setAttribute('id', '')
    const pname = document.createElement ('h1');
    pname.textContent = `${prophet["name" ]} ${prophet["lastname"]}`;
    const birthdate = document.createElement('h2');
    birthdate.textContent = `${prophet["birthdate"]}`;
    const birthplace = document.createElement('h3');
    birthplace.textContent = `${prophet["birthplace"]}`;
    const pimg = document.createElement('img');
    pimg.setAttribute('src', `${prophet["imageurl"]}`);
    pimg.setAttribute('alt', `${prophet["name"]}`);
    section.appendChild(pname);
    section.appendChild (birthdate);
    section. appendChild(birthplace);
    section.appendChild(pimg);
    resultElement.appendChild(section);})
})