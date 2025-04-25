// FizzBuzz class
// Return Fizz if the number is divisible by 3
// Return Buzz if the number is divisible by 5
// Return FizzBuzz if the number is divisible by 3 and 5
// Return the number if the number is not divisible by 3 or 5

// 戻り値の型を明確に定義
export type FizzBuzzResult = "Fizz" | "Buzz" | "FizzBuzz" | number;

export class FizzBuzz {
    constructor() {
    }

    /**
     * 数値を受け取り、FizzBuzz規則に従って文字列または数値を返す
     * @param number 判定する数値
     * @returns FizzBuzz規則に従った結果
     */
    say(number: number): FizzBuzzResult {
        if (this.isDivisibleBy3And5(number)) {
            return "FizzBuzz";
        } else if (this.isDivisibleBy3(number)) {
            return "Fizz";
        } else if (this.isDivisibleBy5(number)) {
            return "Buzz";
        } else {
            return number;
        }
    }

    private isDivisibleBy3(number: number): boolean {
        return number % 3 === 0;
    }

    private isDivisibleBy5(number: number): boolean {
        return number % 5 === 0;
    }

    private isDivisibleBy3And5(number: number): boolean {
        return this.isDivisibleBy3(number) && this.isDivisibleBy5(number);
    }
}

// このファイルを直接実行した場合のデモンストレーション
if (import.meta.main) {
    const fizzBuzz = new FizzBuzz();
    console.log(fizzBuzz.say(3));  // Fizz
    console.log(fizzBuzz.say(5));  // Buzz
    console.log(fizzBuzz.say(15)); // FizzBuzz
    console.log(fizzBuzz.say(7));  // 7
}
