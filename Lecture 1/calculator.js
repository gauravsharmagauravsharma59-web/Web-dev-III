// 1. CLI-Based Calculator using process.argv
// Example: node calculator.js add 10 5

const args = process.argv.slice(2); // Remove node and filename from args

if (args.length < 3) {
  console.log("Usage: node calculator.js <operation> <num1> <num2>");
  console.log("Operations: add, subtract, multiply, divide");
  process.exit(1);
}

const operation = args[0].toLowerCase();
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Error: Both arguments must be valid numbers");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
  case "+":
    result = num1 + num2;
    console.log(`Result: ${num1} + ${num2} = ${result}`);
    break;
  case "subtract":
  case "-":
    result = num1 - num2;
    console.log(`Result: ${num1} - ${num2} = ${result}`);
    break;
  case "multiply":
  case "*":
    result = num1 * num2;
    console.log(`Result: ${num1} * ${num2} = ${result}`);
    break;
  case "divide":
  case "/":
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero");
      process.exit(1);
    }
    result = num1 / num2;
    console.log(`Result: ${num1} / ${num2} = ${result}`);
    break;
  default:
    console.log("Error: Invalid operation. Use add, subtract, multiply, or divide");
    process.exit(1);
}

module.exports = { operation, num1, num2, result };
