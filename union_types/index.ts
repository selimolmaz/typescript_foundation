// this var is goona take number or string!!
let score: number | string = 33

score = 44

score = "55"

console.log(score)

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitest: User | Admin = {name: "hitest", id: 23232}

hitest = {username: "wsda", id: 232}

console.log(hitest)


function getDbId(id: number | string): void{
    if (typeof(id)=="string"){
        id = id.toLocaleLowerCase()
    }
    console.log(`DB id is: ${id}`)
}

getDbId(3);
getDbId("K")

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: string[] | number[] = [1,2,3] // or ["1", "2", "3"] not allow to put diffrent types in single array!!! 
const data4: (string | number | boolean)[] = ["a", 1, 1, "2", 1.3, true, false]

let seatAllowment: "aisle" | "middle" | "window"

seatAllowment = "aisle"
seatAllowment = "middle"
