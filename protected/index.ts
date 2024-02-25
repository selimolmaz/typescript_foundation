
class UserClass {
    private city: string = "Ankara"; // you always need a initializer!!
    protected _courseCounter: number = 1;
    constructor(
        public email: string, 
        public name: string, 
        private userId: string
        ) {
    }

    private deleteToken() {
        console.log("token has been deleted!")
    }

    get getCityName():string {
        return `${this.city}`;
    }

    get getUserId(): string {
        return `${this.userId}`
    }

    get getCourseCounter(): number {
        return this._courseCounter
    }

    set setCourseCounter(setNumber: number) {
        if (setNumber <= 1){
            throw new Error("Course number have to be more than 1!")
        }
        this._courseCounter = setNumber;
    }
}


class SubUser extends UserClass {
    isFamily: boolean = true;
    changeCourseCount () {
        this._courseCounter = 4;
    }
}


const selimKe = new UserClass("selim@gmail.com", "selim", "id")