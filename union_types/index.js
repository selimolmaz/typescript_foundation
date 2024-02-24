// this var is goona take number or string!!
var score = 33;
score = 44;
score = "55";
console.log(score);
var hitest = { name: "hitest", id: 23232 };
hitest = { username: "wsda", id: 232 };
console.log(hitest);
function getDbId(id) {
    if (typeof (id) == "string") {
        id = id.toLocaleLowerCase();
    }
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("K");
