//Bank Accounts Activity 

// 1. Create a class called Account. 
// 2. Add a type property that can be set (example types "Saving" "Checking") 
// 3. Add a funds property (starting funds 100 to open an account) 
// 4. Add a dateOpen property that is set to today's date (hint look at Date in js) **
// 5. Add a withdraw method that will deduct from the funds (only if the funds is available) 
// 6. Add a deposit method that will add to the money to the funds

//Create a new Account class

class Account {
    constructor(type, funds){ //within the constructor we place properties
        this.type = type, //outside the constructor we call the properties
        this.funds,
        this.dateOpen = new Date().toLocaleDateString() //this is a builtin JavaScript method that returns a date to your timezon
    }   //close these before adding the methods
    

    addAmount (openMoney){
        if (openMoney < 100) console.log ("Must have at least $100 to add this") //if what the user enters is less than 100, tell them must have at least 100 to add this
        else {
            this.funds = openMoney;   //this.funds = num means that funds is a property of this object Account and it will be equal to whatever the num is when the user inputs the num to add. Similar saying the above after the constructors this.dateOpen = new Date()
            console.log (`Added ${openMoney}`) //
        }
    }

    withdrawl(deduction){
        this.funds -= deduction; //this.funds = funds - deduction || inputed from user
        console.log(`You withdrew $${deduction} and now you have $${this.funds} left`)
    }

    deposit(depositedMoney){
        this.funds += depositedMoney;
        console.log(`You have added $${depositedMoney} and now have a whopping $${this.funds} `);
    }
    
}


let jessAccount = new Account ("Jess");
console.log(jessAccount); //Account { type: 'Jess', dateOpen: '2/5/2023', fixedMinimum: 100 }

jessAccount.addAmount(50); //Test Case  tofail: here we are using num as 50 for the method aka function addAmount
console.log(jessAccount);  //output = Must have at least $100 to add this || Account { type: 'Jess', dateOpen: '2/5/2023', other: 100 }

jessAccount.addAmount(350); //Test Case to pass
console.log(jessAccount); //Added $150 || Account { type: 'Jess', dateOpen: '2/5/2023', other: 100, funds: 150 }

jessAccount.withdrawl(50);
console.log(jessAccount);

jessAccount.deposit(40000);
console.log(jessAccount);


    // withdraw (num){ //outside the constructor we add any methods
    //        this.amount -= num; //amount is a new variable
    //        console.log('You withdrew $${num} and now only have $${this.amount} left')
            
    //     }
    // deposit(money){
    //         this.amount += money;
    //         console.log ('You added $${money} and now have a whopping $${this.amount}')
    //     }
    

// //Create a Savings Account class
// class Savings extends Account {
//     constructor(type = "savings", interest = 0.01){
//         this.type = type, 
//         this.interest = interest 
//     } // close. then add methods
//     addInterest(money){
//         this.funds += money;
//         console.log ('You added $${money} and now have a whopping $${this.amount}')
//     }
// };

//Create a Checking Account class

// class Checking extends Account {
//     constructor(type = "checking", monthlyFee = 25){
//         this.type = type, 
//         this.monthlyFee = monthlyFee 
//     } // close. then add methods
//     deductFee(){
//         this.funds -this.monthlyFee;
//     }
// };


// let jessAccounts = new Account ("Jess");
// let newSavings = new Savings ('Jesssavings')
// jessAccounts.deposit();
// console.log(jessAccounts);
// console.log(newSavings)