//Bank Accounts Activity 


//Create a new Account class

class Account {
    constructor(type, funds){ //within the constructor we place properties
        this.type = type, //outside the constructor we call the properties
        this.funds = funds,
        this.dateOpen = new Date()
    } //close these before adding the methods
        withdraw (){ //outside the constructor we add any methods
           this.funds--;
        }
        deposit(){
            this.funds++; //this needs to change bc it will only increase by 1
        }
    }

//Create a Savings Account class

class Savings extends Account {
    constructor(type = "savings", interest = 1){
        this.type = type, 
        this.interest = interest 
    } // close. then add methods
    addInterest(){
        this.funds++;
    }
};


//Create a Checking Account class

class Checking extends Account {
    constructor(type = "checking", monthlyFee = 25){
        this.type = type, 
        this.monthlyFee = monthlyFee 
    } // close. then add methods
    deductFee(){
        this.funds -this.monthlyFee;
    }
};

let jessAccounts = new Account ('checking', 10000, "July 7 2023");
jessAccounts.deposit();
console.log(jessAccounts);