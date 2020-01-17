//1. Remember to call methods and variables on a variable(name doesn;t matter) 
//2. Remember to export what you want to import
//3. You can call a function directly in the imported file(module) for side-effects


var helper = require('./utils');

console.log("Starting the script");
helper.greet("Welcome");
console.log(helper.myDateTime());
console.log(helper.SUPERHERO);
console.log("--------------------- main.js starts here---------");
require("./main");