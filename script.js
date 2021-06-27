'use strict'

//make some logic that will populate that bit of text on my webpage

let answer = prompt('what is your name?'); //carrie

// we are getting the date and hour of the current time
let time = new Date().getHours();
let timeofday = '';


if(time < 12){
    timeofday = 'Good morning, ';
} else if (time <17){
    timeofday = 'Good afternoon, ';
} else{
    timeofday = 'Good evening, ';
}
if(time > 12){
    time = time - 12 + 'pm';
} else {
    time = time + 'am';
}

// this variable exists, but i'm not assigning a value yet
let greeting = '';

if(answer === 'carrie'){
    greeting = timeofday + ' ' + answer + '. I hope you have a great day. The hour time is ' + time;
} else{
    greeting = timeofday + 'today is a good day. The time right now is ' + time;
}


document.write(greeting);
