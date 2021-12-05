// ***Write a function which accepts two numbers as arguments. The function should return the sum of the two numbers***

function sumofNum(num1, num2) {
  return num1 += num2
}

console.log(sumofNum(9, 6));


// ***Write a function that accepts four arguments, each will be a number. The function should add the first two numbers together; add the third and fourth numbers; and return the result of multiplying both sums together***

function multiplySums(num1, num2, num3, num4) {
  let sum1 = num1+num2;
  let sum2 = num3+num4;
  let finalSum = sum1*sum2;

  return finalSum
  }

  console.log(multiplySums(1, 2, 10, 10));
