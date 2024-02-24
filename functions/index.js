"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2; // normally its have to be like this
    //return "Hello";
}
;
// lambda 
var getHello = function (s) {
    return "Hello!" + s;
};
function getUpper(val) {
    return val.toLocaleLowerCase();
}
function signUpUser(name, email, isPaid) {
}
// Default values
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var heros = ["thor", "spiderman", "ironman"];
var myvalue = addTwo(5);
var upperVar = getUpper("a");
var herosList = heros.map(function (hero) {
    return "hero is: ".concat(hero);
});
signUpUser("selim", "selim@gmail.com", true);
loginUser("mert", "megt@gmail.com", false);
loginUser("mert", "megt@gmail.com");
