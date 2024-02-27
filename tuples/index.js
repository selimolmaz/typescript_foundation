//const user: (number | string)[] = ["hc", 1]
var tUser;
// proper way to use tuple
tUser = ["selim", 234, true];
var newUser = ["selim", 23321];
// this newUser based on array but ts protocol is not allow that usages!!
// newUser.push(true)
console.log(newUser[1]);
