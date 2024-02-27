//const AISLE = 0
//const MIDDLE = 1
//const WINDOW = 2
//let seat;
//if (seat === AISLE) {
//}
// this is the proper way to declare an enum
var SeatChoices;
(function (SeatChoices) {
    SeatChoices[SeatChoices["AISLE"] = 0] = "AISLE";
    SeatChoices[SeatChoices["MIDDLE"] = 1] = "MIDDLE";
    SeatChoices[SeatChoices["WINDOW"] = 2] = "WINDOW";
})(SeatChoices || (SeatChoices = {}));
console.log(SeatChoices.MIDDLE);
