let date = new Date();

const d = new Date();

function dayOfWeek(){
    document.querySelector("#message").textContent = "Come join us for a chamber meeting on Wednesday at 7:00pm"
}

if(date.getDate() == 1 || date.getDate == 2) {
    document.querySelector('#message').style.display = "block";
}
else{
    document.querySelector('#message').style.display = "none";
}