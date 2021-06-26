'use strict'

//make some logic that will populate that bit of text on my webpage

let answer = prompt('what is your name?'); //carrie

// we are getting the date and hour of the current time
let time = new Date().getHours();

if(time > 12){
    time = time - 12 + 'pm';
} else {
    time = time + 'am';
}

if (time < 12){
    timeofday = 'good morning';
} else if (time <17){
    timeofday = 'good afternoon';
} else{
    timeofday = 'good evening';
}


// this variable exists, but i;m not assigning a value yet
let greeting = '';

if(answer === 'carrie'){
    greeting = timeofday + ' ' + answer + '. I hope you have a great day. The hour time is ' + time;
} else{
    greeting = timeofday + 'you cannot pass go, you cannot collect $200. The hour time is ' + time;
}


document.write(greeting);
