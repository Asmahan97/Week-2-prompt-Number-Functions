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



//***Write a function which accepts two numbers. The function should return the larger number***

function returnLargest(arg1, arg2) {
  return Math.max(arg1, arg2)
}

console.log(returnLargest(10, 1000))



//***Write a function which accepts an array as an argument. Each item in the array will be a number. The function should add all the numbers in the array and return the result***

function sumOfArray(arr) {
  let sum = 0
  
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  
  } 
  return sum
  }
  
  console.log(sumOfArray([1, 2, 3, 4, 5]));