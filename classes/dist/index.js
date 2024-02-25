var UserClass = /** @class */ (function () {
    function UserClass(email, name) {
        this.city = ""; // you always need a initializer!!
        this.email = email;
        this.name = name;
    }
    return UserClass;
}());
// not like this!! const selim = new User(email:"selim@gmail.com", name:"selim")
// just give it parameter without params 
var selimKe = new UserClass("selim@gmail.com", "selim");
selimKe.city = "Anakra";
