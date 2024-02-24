type User = {
    //raad only
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    // optional
    credcardDetails?: number
}


let myUser: User = {
    _id: "234",
    name: "h",
    email: "a@gmail.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

// combine types!
type cardDetails = cardDate & cardNumber & {
    ccv: number
}

myUser.email = "selim.olmaz@gmail.com"
myUser.credcardDetails = 121453532
// you cannot do tihs!!
//myUser._id = "wdawdaw"
console.log(myUser.credcardDetails, myUser._id)