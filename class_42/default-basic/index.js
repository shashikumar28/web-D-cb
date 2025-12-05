const Joke = require('give-me-a-joke');
const figlet = require('figlet');
const colors = require('colors');


// Joke.getRandomDadJoke (function(joke) {
//      console.log(joke);
// });

figlet("shashi", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});

