console.log('Hello');

//console.log(firstName);

//variable instation
let lastName = "Gauci";
console.log(lastName);

firstName = "Emanuel";
console.log(firstName);

let number1, number2;
let num3 = 3, num4;

let num5;
let num6;
let intereestRate = 0.3;

//objects
let person = {
    firstName : 'Emanuel', 
    lastName : 'Gauci',
    age : 18

};

console.log(person);

//dot notation
console.log(person.age);

//bracket notation
console.log(person['age']);


let propertyName = 'wheels';
let car= {
    wheel: 4,
    doors: 4
};
console.log(car[propertyName]);

//empty array
let colors =[];
console.log(colors);

colors[0] = 'red';
console.log(colors);

function alertName(firstName){
    alert(firstName);
}
alertName('Matt');

let heading = document.getElementById('pageTitle');
console.log(heading);
console.log(heading.innerHTML);

heading.innerHTML = "Profile Name";

function changeColor(){
    console.log(heading.classList);
    heading.classList.remove('blueHeading');
    console.log(heading.classList);
    heading.classList.add('redHeading');
    console.log(heading.classList);
}


let cars =['Ferrari', 'Lamborghini', 'Rolls Royce'];

for(let counter = 0; counter < 10; i++){
    console.log(cars[counter]);
}

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);


cars.forEach(function(val){
    alert(val);
})

let teams = ['Team A', 'Team B', 'Team C'];
teams.forEach(function(teamName){
    let div = document.getElementById('jsLoopContent');
    teams.forEach(function(teamName){
        div.innerHTML = div.innerHTML + "<h1>" + teamName +"</h1>";
    })
})