// FizzBazz class
// Return Fizz if the number is divisible by 3
// Return Bazz if the number is divisible by 5
// Return FizzBazz if the number is divisible by 3 and 5
// Return the number if the number is not divisible by 3 or 5
class FizzBazz {
    constructor() {
    }
    say(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "FizzBazz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else if (number % 5 === 0) {
            return "Bazz";
        } else {
            return number;
        }
    }
}

const fizzBazz = new FizzBazz();
console.log(fizzBazz.say(3)); // Fizz