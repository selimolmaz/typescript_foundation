function addTwo(num: number):number {
    return num + 2; // normally its have to be like this
    //return "Hello";
};

// lambda 
const getHello = (s:string):string => {
    return "Hello!" + s;
}

function getUpper(val: string){
    return val.toLocaleLowerCase();
}

function signUpUser(name: string, email: string, isPaid:boolean){

}

// Default values
let loginUser = (name: string, email: string, isPaid: boolean= false) => {}
               
const heros = ["thor", "spiderman", "ironman"]
let herosList: string[] = heros.map(hero => {
    return `hero is: ${hero}`;
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

let myvalue = addTwo(5);
let upperVar =  getUpper("a");

signUpUser("selim", "selim@gmail.com", true);
loginUser("mert", "megt@gmail.com", false);
loginUser("mert", "megt@gmail.com");
consoleError("Dummy Err msg!")

export {}

