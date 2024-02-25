/*
class UserClass {
    // default public!
    public email: string;
    name: string;
    // in js this looks like #city
    private city: string = ""; // you always need a initializer!!
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}
*/

class UserClass {
    private city: string = ""; // you always need a initializer!!
    constructor(
        public email: string, 
        public name: string, 
        private userId: string
        ) {
    }
}




// not like this!! const selim = new User(email:"selim@gmail.com", name:"selim")
// just give it parameter without params 
const selimKe = new UserClass("selim@gmail.com", "selim", "id")

// this is a private attribute you cannot call!
// selimKe.city = "Ankara" // set city

// selimKe.userId this also not callable!