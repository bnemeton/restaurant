const Customer= require("./Customer");
class Reservation extends Customer {
    constructor (name,email,phone, ID){
        this.ID= ID
        super(name,email,phone)
    }
    getID(){
        return this.ID
    }

}
module.exports = Reservation