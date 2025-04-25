import { FizzBuzz } from './hello.ts';

function runFizzBuzz() {
  const fizzBuzz = new FizzBuzz();
  
  // 1から20までの数でFizzBuzzを実行
  for (let i = 1; i <= 20; i++) {
    console.log(`${i}: ${fizzBuzz.say(i)}`);
  }
}

runFizzBuzz();
