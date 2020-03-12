const fs = require('fs');

const people = [];
const genders = ['M', 'F'];
const maleNames = ['John', 'Ben', 'Matt', 'Oliver', 'Joe'];
const femaleNames = ['Kate', 'Tracy', 'Emma', 'Jane', 'Jennifer'];
const lastNames = ['Doe', 'Wallace', 'Jenkins', 'Hurray', 'Daniels'];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

for ( let i = 0; i < 20; i++ ) {
  const gender = randChoice(genders);
  let firstName;

  if ( gender === 'M' ) {
    firstName = randChoice(maleNames);
  } else {
    firstName = randChoice(femaleNames);
  }

  const person = {
    gender: gender,
    firstName: firstName,
    lastName: randChoice(lastNames),
    age: Math.floor(Math.random() * 61 ) + 18,
  };

  people.push(person);

};

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw ('Something went wrong! Error: ', err);
  console.log('File has been successfully saved! Please check people.json')
});
