"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "selim",
    email: "selim@gmail.com",
    isAvtive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "selim", isPaid: false, email: "selim@gmail.com" };
createUser({ name: newUser.name, isPaid: newUser.isPaid });
// return object type
function createCourse() {
    return { name: "math", price: 23 };
}
