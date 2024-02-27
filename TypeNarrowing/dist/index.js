/*
function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") { // type guard!
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
*/
function padLeft(padding, input) {
    if (typeof padding === "number") { // do some number stuff!
        return "".concat(padding) + input;
    }
    return padding + input;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID!");
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll("aaaaa");
