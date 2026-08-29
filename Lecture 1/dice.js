// 5. Random Dice Generator using crypto Module
// Generates random dice rolls (1-6) using crypto for randomness

const crypto = require("crypto");
const logger = require("./modules/logger");

// Generate single dice roll (1-6) using crypto
function rollDice() {
  // Generate random byte and convert to 1-6
  const randomByte = crypto.randomBytes(1)[0]; // Returns 0-255
  const diceValue = (randomByte % 6) + 1; // Convert to 1-6
  return diceValue;
}

// Roll multiple dice
function rollMultipleDice(numRolls = 1) {
  const rolls = [];
  logger.info(`Rolling ${numRolls} dice...`);

  for (let i = 0; i < numRolls; i++) {
    const roll = rollDice();
    rolls.push(roll);
    console.log(`Roll ${i + 1}: ${roll}`);
  }

  const sum = rolls.reduce((acc, val) => acc + val, 0);
  const average = (sum / numRolls).toFixed(2);

  console.log(`\n--- Summary ---`);
  console.log(`Total Rolls: ${numRolls}`);
  console.log(`Sum: ${sum}`);
  console.log(`Average: ${average}`);

  return {
    rolls,
    sum,
    average,
    numRolls,
  };
}

// Secure random number generator (1-6)
function secureRandomDice() {
  return new Promise((resolve, reject) => {
    crypto.randomInt(1, 7, (err, n) => {
      if (err) {
        logger.error(`Failed to generate random number: ${err.message}`);
        reject(err);
      } else {
        resolve(n);
      }
    });
  });
}

module.exports = {
  rollDice,
  rollMultipleDice,
  secureRandomDice,
};
