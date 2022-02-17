import fetch from 'node-fetch'
let url = ""

const response = await fetch('https://3001-deeskii-ipaddev-gbw5sdbbi77.ws-us32.gitpod.io/');
const body = await response.json();

console.log(body)