// Custom Module: isEven - Check if a number is even
// This module demonstrates module.exports and require()

function isEven(num) {
  if (typeof num !== "number") {
    return "Error: Input must be a number";
  }
  return num % 2 === 0;
}

function isOdd(num) {
  if (typeof num !== "number") {
    return "Error: Input must be a number";
  }
  return num % 2 !== 0;
}

function analyzeNumber(num) {
  if (typeof num !== "number") {
    return "Error: Input must be a number";
  }
  return {
    number: num,
    isEven: isEven(num),
    isOdd: isOdd(num),
    square: num * num,
    cube: num * num * num,
  };
}

// Export functions using module.exports
module.exports = {
  isEven,
  isOdd,
  analyzeNumber,
};
