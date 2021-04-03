const Customer= require("./Customer");
class Waitlist extends Customer {
    constructor(name,email,phone,waitlistNumber){
        super(name,email,phone)
        this.waitlistNumber = waitlistNumber
    }
    getWaitlistNumber(){
        return this.waitlistNumber
    }
}
module.exports = Waitlist 