class UserClass {
    email: string;
    name: string;
    city: string = ""; // you always need a initializer!!
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}
// not like this!! const selim = new User(email:"selim@gmail.com", name:"selim")
// just give it parameter without params 
const selimKe = new UserClass("selim@gmail.com", "selim")
selimKe.city = "Ankara" // set city