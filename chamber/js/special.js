let date = new Date();

const d = new Date();

if(date.getDay() == 1 || date.getDay() == 2) {
    document.querySelector('#message').style.display = "block";
}
else{
    document.querySelector('#message').style.display = "none";
}