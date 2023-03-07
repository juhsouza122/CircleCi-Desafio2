// test.js
const app = require('./app');

function TestAdd() {
  if (app.Add(2, 3) === 5) {
    console.log("Add function works correctly");
  } else {
    console.log("Add function is incorrect");
  }
}

TestAdd();