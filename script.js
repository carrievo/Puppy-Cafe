'use strict'

function getName(){
//make some logic that will populate that bit of text on my webpage
let name = prompt('what is your name?'); //carrie
    return name;
}

// we are getting the date and hour of the current time
let time = new Date().getHours();

function getTimeOfDay(time){
    let timeofDay = '';
    if(time < 12){
        timeofDay = 'Good morning, ';
    } else if (time <17){
        timeofDay = 'Good afternoon, ';
    } else{
        timeofDay = 'Good evening, ';
}
    return timeofDay;
}

function getamOrpm(time){

    if(time > 12){
       time = time - 12 + 'pm';
    } else {
        time = time + 'am';
    }
    return time;
}

// we are getting the date and hour of the current time

function getGreeting(timeofday, name, ampm){
    let greeting = '';

    if(name === 'carrie'){
        greeting = timeofday + ' ' + name + '. WOOF WOOF! I hope you have a great day. The hour time is ' + ampm;
    } else{
        greeting = timeofday + ' WOOF WOOF! Today is a good day. The time right now is ' + ampm;
    }

    return greeting;

}

function writeToDocument(greeting){
document.write(greeting);
}

// call all of our required functions
let timeOfDay = getTimeOfDay(time);
let name = getName();
let ampm = getamOrpm(time);
let greeting = getGreeting(timeOfDay, name, ampm);
writeToDocument(greeting);

var userChoice;

userChoice = prompt('do you like dogs, cats or neither?');
console.log('User choice: ' + userChoice);

if (userChoice !== 'dog' && userChoice !== 'cat' && userChoice !== 'neither') {
    userChoice = prompt('Are you sure?');
} else if (userChoice === computerChoice) {
    userChoice = prompt('You may enter, but first...');
    console.log('New user choice: ' + userChoice);
}

let rating = prompt('From 1-30, how much do you love dogs?');

for(let i = 0; i < rating; i++){
document.write('<img class="smileStar" src="star.png"/>');
}

