function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("hello"));
  
  ///////////////////////////////////////////////////////////////////////////////////////
  function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers";
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorial(5));
  ///////////////////////////////////////////////////////////////////////////////////////
  function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  
  console.log(mergeObjects(obj1, obj2));
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  console.log("************************************************************");
  
  function toggleBoolean(bool) {
    return !bool;
  }
  
  console.log(toggleBoolean(true));
  console.log(toggleBoolean(false));
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  console.log("************************************************************");
  ///////////////////////////////////////////////////////////////////////////////////////
  const numbers = [12, 7, 5, 21, 18, 33, 8, 14];
  
  // 2. Function to Calculate Sum
  function calculateSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // 3. Function to Find Maximum
  function findMaximum(numbers) {
    return Math.max(...numbers);
  }
  
  // 4. Function to Find Minimum
  function findMinimum(numbers) {
    return Math.min(...numbers);
  }
  
  // 5. Function to Count Even and Odd Numbers
  function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    numbers.forEach((num) => {
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    });
    return { evenCount, oddCount };
  }
  
  function generateReport(numbers) {
    const sum = calculateSum(numbers);
    const max = findMaximum(numbers);
    const min = findMinimum(numbers);
    const { evenCount, oddCount } = countEvenOdd(numbers);
  
    return `
      Array: [${numbers.join(", ")}]
  
      Sum: ${sum}
  
      Maximum: ${max}
  
      Minimum: ${min}
  
      Even Numbers: ${evenCount}
  
      Odd Numbers: ${oddCount}
      `;
  }
  
  function main() {
    const report = generateReport(numbers);
    console.log(report);
  }
  
  main();