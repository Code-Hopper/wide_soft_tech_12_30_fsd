class RBI {
    createAccount() {
        throw ("cannot access this methods from RBI please create your own Cxreate Account Methods")
    }
}

class SBI extends RBI {
    createAccount() {
        console.log("this is craete account from sbi class")
    }
}

let ac1 = new SBI()

ac1.createAccount()

// javascript 
// backend development, frontend development, mobile developmen