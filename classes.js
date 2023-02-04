//classes are a way for us to group objects // create a ton of objects. 
//They use the start of class
//the constructor is like a parameter of the class. When I invoke this, these are the things I want as inputs. 
//basically for person of Eric, I want these different items. The things that don't need a value are arms, legs, whatever is already pre-set, which is placed at the end for best practice. 



// let duke = {
//     name: "Duke",
//     breed: "Havanese",
//     age: 2,
//     hyper: true,
//     bark(){
//         console.log("Yelp! I'm barking")
//     },
//     playWithSister(){
//         console.log("I love playing with Emily")
//     }
// }

// console.log(duke),
// duke.bark,

class Person {  //this constru
    constructor(name, age, hairColor, height, weight, ethnicity, favNumber, favIceCream, favColor, ssn, arms=2, legs=2){
        this.name = name,
        this.age = age,
        this.hairColor = hairColor,
        this.height = height,
        this.weight = weight,
        this.ethnicity = ethnicity , 
        this.favNumber = favNumber,
        this.favIceCream = favIceCream,
        this.favColor = favColor,
        this.ssn = ssn,
        this.legs =legs 
    }
    greet(){  //these are functionalities and methods of the new person
        console.log("Hello")
    }
    gotOlder(){
        this.age++;
    }
    // hop(){
        
    // }

}
//eric is this object whic can be set to this new person

let eric = new Person ("Eric", 37, "black", 78, 200, "White", 25, "Strawberry", "Blue or Duke", 875309);
console.log(eric); //we need to console.log the new person

eric.greet(); //to call the creating

eric.gotOlder();
console.log(eric); 

// if we want the age to increase, we need to call the gotOlder method and console.log eric again.

// eric.gotOlder();
// console.log(eric);

// console.log(greet);
// console.log(gotOlder);

class SuperHero extends Person{
    fly(){
        console.log("Up up and away");
    }
    greet(otherPerson){
        console.log("Greetings" +otherPerson);
    }
    jump(){
        super.hop(); //instead of using ".this" we use super to call the parent that it's related to.
        this.fly();
    }
};

const superman = new SuperHero('Clark Kent', 30, "black");
superman.hop();