/*
function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") { // type guard!
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
*/

function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") { // do some number stuff!
        return `${padding}` + input;
    }
    return padding + input;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID!")
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

printAll("[aaaaa]")