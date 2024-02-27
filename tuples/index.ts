//const user: (number | string)[] = ["hc", 1]
let tUser: [string, number, boolean]

// proper way to use tuple
tUser = ["selim", 234, true]

// this is not correct way to add var to tuples!!
//tUser = [23, "selim", false]

type User = [string, number]

const newUser: User = ["selim", 23321]

// this newUser based on array but ts protocol is not allow that usages!!
// newUser.push(true)
console.log(newUser[1])
