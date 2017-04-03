let partyParrot = {
  isBird: true,
  hatesParties: false,
  name: 'Party Parrot',
  age: 21,
  hobbies: ['partying', 'soccer', 'dancing'],
}

let g48 = {
  learningExpress: true,
  size: 19,
  floor: '2nd'
}

// Create a seperate variable for every key in partyParrot using destructuring and
// log all the variable to the console

// let { isBird, hatesParties, name, age, hobbies } = partyParrot;
//
// console.log(isBird, hatesParties, name, age, hobbies);


// Use the partyParrot object again, but this time give the values different
// variable names and log them to the console

// let { isBird: a, hatesParties: b, name: c, age: d, hobbies: e } = partyParrot;
//
// console.log(a,b,c,d,e);



// Use the g48 object to create 5 variables! hint: default values
// log them all to the console!

// let { learningExpress, size, floor, hasSwag = 'absolutely', friendly = true} = g48
//
// console.log(learningExpress, size, floor, hasSwag, friendly);



// Bonus: only grab out the values from the nested object and log them
let nested = {
  isFun: true,
  lowerLevel: {
    codename: 'Rick Sanchez',
    profession: 'Scientist'
  }
}

// let { lowerLevel: { codename, profession } } = nested;
//
// console.log(codename, profession);


/////////////////////////// Arrays ////////////////////////////////////////////
// Use destructuring to break down this array and log the variables to the console
let randomArr = [1, 'space x', false, ['cool', 'beans']]

// let [f,g,h,i] = randomArr;
//
// console.log(f,g,h,i);




// Use randomArr again, but only create variable for the first and last index!
// log them to the console!

// let [first, , , last] = randomArr;
//
// console.log(first, last);


//Bonus: Only grab out the last value of the nested array

// let [, , , [nestedFirst, nestedLast]] = randomArr;
// console.log(nestedFirst, nestedLast);
