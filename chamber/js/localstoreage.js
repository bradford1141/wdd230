let lastVistDate; 
const now = Date.now();

if (window.localStorage.getItem('last-visit-date'))
{
    lastVistDate = window.localStorage.getItem('last-visit-date');
} else{
    lastVistDate = now;
}

window.localStorage.setItem('last-visit-date', now);

const secondsSinceLastVisit = Math.floor((now - lastVistDate) / 1000);
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / 86400);
console.log(secondsSinceLastVisit);

document.querySelector('#seconds-ago').textContent = secondsSinceLastVisit;
document.querySelector('#days-ago').textContent = daysSinceLastVisit;