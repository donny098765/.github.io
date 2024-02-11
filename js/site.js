const hours = new Date().getHours()  // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

// Select the div with id "welcome"
const welcomeDiv = document.getElementById('welcome');

// Check the time of day and set the welcome message accordingly
if (isMorning) {
    welcomeDiv.innerHTML = 'Good morning! Welcome to my website.';
}   else if (isAfternoon) {
    welcomeDiv.innerHTML = 'Good afternoon! Welcome to my website.';
}   else if (isEvening) {
    welcomeDiv.innerHTML = 'Good evening! Welcome to my website.';
}