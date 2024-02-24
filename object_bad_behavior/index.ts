const User = {
    name: "selim",
    email: "selim@gmail.com",
    isAvtive: true
}

function createUser({name: string, isPaid: boolean}) {
    
}

let newUser = {name: "selim", isPaid: false, email: "selim@gmail.com"}

createUser({name: newUser.name, isPaid: newUser.isPaid})

// return object type
function createCourse(): {name: string, price: number} {
    return {name: "math", price: 23}
}

export {}