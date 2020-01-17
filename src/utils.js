 console.log("Import me for side effects.");


const SUPERHERO = "Hulk";

function greet(greeting){
    console.log(greeting);
}

const myDateTime = function () {
    return Date();
  };

module.exports = {
    greet,
    myDateTime,
    SUPERHERO
}

greet("side-effects"); 