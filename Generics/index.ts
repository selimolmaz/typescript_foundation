const scrore: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

// this automatically take all types what you give!
function identityThree<Type>(val: Type): Type {
    return val
}

// Exactly the same identityThree function
function identityFour<T>(val: T): T {
    return val
}

console.log(typeof(identityThree(2)))
console.log(typeof(identityThree([2])))
console.log(typeof(identityThree("2")))
console.log(typeof(identityThree(true)))

interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({brand:"sea", type: 2})

/// Array and arrow function

function getSearchProduct<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProduct = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}