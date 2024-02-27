interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}


function handleShape(shape: Shape) {
    // oops!
    // if (shape.kind === "rect") {}

    if (shape.kind === "circle") { } // thats way!
}

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}