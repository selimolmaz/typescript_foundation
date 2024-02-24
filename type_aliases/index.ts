type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    return {name: "sda", email: "wadaw", isActive: false}
}