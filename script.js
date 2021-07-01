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

    if(name === 'Carrie'){
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


let rating = prompt('what is your rating for this cafe?');

for(let i = 0; i < rating; i++){
document.write('<img class="doglist" src="star.png"/>');
}

