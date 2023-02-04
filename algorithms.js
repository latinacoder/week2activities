// **Prompt**: Given an array of integers, find the sum of its elements.
// For example an array of [1,2,3] will be ran as 1 + 2 + 3 for a total return of 6.
// Example Input:

// jsx
const array = [1,2,3]
let sum = 0; //new variable needs to be initialized as a number. 

array.forEach(itemInArray => {  
    sum += itemInArray; //sum = sum + itemInArray
})

console.log(sum);

// Example output:

// jsx
// 6


// // **Function Description**
// // The function should be called `simpleArraySum` and have the following parameter(s):
// - *ar*: an array of integers
// # **Input Format**
// Input will be an array of integers. 
// # **Output Format**
// Return the sum of the array's elements as a single integer.


function simpleArraySum (arr){
    let total = 0;
    for ( let i = 0; i < arr.length; i++){
        total += arr[i]   //"whatever the sum of the previous index plus the new index" ex: in an array of [1,2,3] = 1 + 2 = 3 + 3 = 6
    }
    return total;}

    console.log(simpleArraySum([1,2,3]));

    //Answer #1: 
    // function simpleArraySum(arr) {
    //     // if(typeof arr !== 'object') return "You're mean for not giving me an array"
    //     let sum = 0;
    //     for(let i = 0; i < arr.length; i++) {
    //         sum += arr[i];
    //     }
    //     return sum;
    // }
    
    // console.log(simpleArraySum([1, 2, 3])) //expects 6
    // console.log(simpleArraySum([4, 12, 3])) //expects 19

// Multiples of 3 or 5

// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    
    // Find the sum of all the multiples of 3 or 5 below 1000.

function sumMultiplesOfThreeAndFive(num){
    let sum = 0;
    for (let i = 3; i < num ; i ++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i
        }
    }
    return sum;
}

console.log(sumMultiplesOfThreeAndFive(10)); //we write 10 as the num which will accept 3, 5, 6, 9, and when added gives me 23


//3: 
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function factor(num1, num2) {
    if(num1 % num2 === 0) return true;
    return false;
}

function prime(num) {

}

function largestPrimeFactor(num) {
    for(let i = num; i > 0; i++) {
        if(factor(num, i) && prime(num)) return i;
    }
}

console.log(largestPrimeFactor(13195))