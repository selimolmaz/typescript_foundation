function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

interface DataBase {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends DataBase>(val1:T, val2:U): object {
    return {
        val1,
        val2
    }
}

// anotherFunction(2, "4")

anotherFunction (12, {connection: "wdwa", username: "wda", password: "wdawd"})


// Generic class

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}


class Sellable<T> {
    public card : T[] = []
    addToCard(product: T){
        this.card.push(product)
    } 
}