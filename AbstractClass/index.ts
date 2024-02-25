abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }
    abstract takePhoto(): string
    // default 
    getRealTime(): number {

        return 5
    }
}

// you cannot have instant og this object
//const selim = new TakePhoto("Auto", "NewYork")

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string
    ) {
        super(cameraMode, filter)
    }



    takePhoto(): string {
        throw new Error("Method not implemented.");
    }

}

const version2 = new Instagram("wadw", "wdawda", "wdwada")
console.log(version2.getRealTime()  )