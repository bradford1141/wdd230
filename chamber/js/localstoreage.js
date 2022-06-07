let lastVistDate; 
const RightNow = Date.now();

if (window.localStorage.getItem('last-visit-date'))
{
    lastVistDate = window.localStorage.getItem('last-visit-date');
} else{
    lastVistDate = RightNow;
}

window.localStorage.setItem('last-visit-date', RightNow);

const secondsSinceLastVisit = Math.floor((RightNow - lastVistDate) / 1000);
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / 86400);
console.log(secondsSinceLastVisit);

document.querySelector('#seconds-ago').textContent = secondsSinceLastVisit;
document.querySelector('#days-ago').textContent = daysSinceLastVisit;