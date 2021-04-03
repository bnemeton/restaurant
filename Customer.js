class Customer {
    constructor( name, email,phone ){
        this.name =name 
        this.email = email 
        this.phone = phone
    }
    getname(){
        return this.name
    }
    getemail(){
        return this.email
    }
    getphone(){
        return this.phone
    }
}
module.exports = Customer