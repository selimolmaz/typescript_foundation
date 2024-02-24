var myUser = {
    _id: "234",
    name: "h",
    email: "a@gmail.com",
    isActive: false
};
myUser.email = "selim.olmaz@gmail.com";
myUser.credcardDetails = 121453532;
// you cannot do tihs!!
//myUser._id = "wdawdaw"
console.log(myUser.credcardDetails, myUser._id);
