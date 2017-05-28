let partyParrot = {
  isBird: true,
  hatesParties: false,
  name: 'Party Parrot',
  age: 21,
  hobbies: ['partying', 'soccer', 'dancing'],
}

// Create a seperate variable for every key in partyParrot using destructuring and
// log all the variable to the console
let {
  isBird,
  hatesParties,
  name,
  age,
  hobbies
} = partyParrot;
console.log(isBird, hatesParties, name, age, hobbies);


// Use the partyParrot object again, but this time give the values different
// variable names and log them to the console
let {
  isBird: b,
  hatesParties: hp,
  name: n,
  age: a,
  hobbies: h
} = partyParrot;
console.log(b, hp, n, a, h);




let g48 = {
  learningExpress: true,
  size: 19,
  floor: '2nd'
}



// Use the g48 object and destructuring to create 5 variables! hint: default values
// log them all to the console!

var {
  learningExpress,
  size,
  floor,
  color = 'gold',
  age = '27'
} = g48;
console.log(learningExpress, size, floor, color, age);


// Bonus: only grab out the values from the nested object and log them
let nested = {
  isFun: true,
  lowerLevel: {
    codename: 'Rick Sanchez',
    profession: 'Scientist'
  }
}

var {
  codename,
  profession
} = nested.lowerLevel;
console.log(codename, profession);
/////////////////////////// Arrays ////////////////////////////////////////////
// Use destructuring to break down this array and log the variables to the console
let randomArr = [1, 'space x', false, ['cool', 'beans']]


let [first, second, third, fourth] = randomArr;
console.log(first, second, third, fourth);


// Use randomArr again, but only create variable for the first and last index!
// log them to the console!

let [my, , , teddy] = randomArr;
console.log(my, teddy);


//Bonus: Only grab out the last value of the nested array
//
var [, last] = teddy;
console.log(last);

///////////////////////////////////////////////////////////////////////////////
let doggo = 'A little doggo';
let pupper = 'A big pupper';

//Use destructuring to swap the values of doggo and pupper and log the values to the console!
[doggo, pupper] = [pupper, doggo];
console.log(doggo, pupper);
