import fetch from 'node-fetch'
let person = {
    firstName: "Dee",
    lastName: "Ragoo",
    height: "5'8\"",
    age: 30
}

let name = person.firstName
let age = person.age
let height = person.height

const response = await fetch('http://localhost:3000', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: {
   "name": "name",
   "age": "age",
   "height": "height"
  },
}); 

response.json().then(data => {
  console.log(data);
});

//console.log(`Hi ${name}, you are ${age} years old and ${height} tall.`)