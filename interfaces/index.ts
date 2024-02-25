interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    //startTrial: () => string
    startTrail(): string
    getCoupon(cuponname: string, value: number): number
}

// reopen interfaces!

interface User {
    githubToken?: string
}

// inheritance 

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const selim: User = {
    email: "s@s.com", userId: 2231, dbId: 2123,
    startTrail: () => {
        return "trail started!"
    },
    getCoupon(cuponname: "selim2311", value: 24) {
        return 23 + (value / 100)
    },
    githubToken: "wadwadwa232waddcvbzxcxüişl2231"
}

const coolerSelim: Admin = {
    email: "s@s.com", userId: 2231, dbId: 2123,
    startTrail: () => {
        return "trail started!"
    },
    getCoupon(cuponname: "selim2311", value: 24) {
        return 23 + (value / 100)
    },
    role: "admin" // this is the admin attribute!
}

selim.email = "selim@gmail.com"
// selim.dbId = 232 this is the read only!!!

