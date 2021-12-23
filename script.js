// Elements 
let dayInWeek = document.getElementById('day');
let message = document.getElementById('message');

let date = new Date();
const day = date.getDay();

switch (day) {
    case 1:
        dayInWeek.textContent = 'Monday';
        message.textContent = 'New week is here! Good luck 🍀';
        break;
    case 2:
        dayInWeek.textContent = 'Tuesday';
        message.textContent = 'You survived Monday, let\'s move on 🛴';
        break;
    case 3:
        dayInWeek.textContent = 'Wednesday';
        message.textContent = 'Happy Wednesday! Have a wonderful day 🌞';
        break;
    case 4:
        dayInWeek.textContent = 'Thursday';
        message.textContent = 'Tommorrow is Friday! You can do this! 🎈';
        break;
    case 5:
        dayInWeek.textContent = 'Friday';
        message.textContent = 'Life is good, especially on Friday! 🌅';
        break;
    case 6:
        dayInWeek.textContent = 'Saturday';
        message.textContent = 'Saturday is here! Time to drink 🍷';
        break;
    case 7:
        dayInWeek.textContent = 'Sunday';
        message.textContent = 'Super Sunday wishes for Your friends and family 👨‍👩‍👦‍👦';
        break;
};