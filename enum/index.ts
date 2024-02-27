//const AISLE = 0
//const MIDDLE = 1
//const WINDOW = 2

//let seat;

//if (seat === AISLE) {
//}

// this is the proper way to declare an enum
// const for make it js code shorter, keep it mind!!!
const enum SeatChoices {
    AISLE,
    MIDDLE,
    WINDOW
}

console.log(SeatChoices.MIDDLE)