// Main Application - Demonstrates all utilities
// This file imports and uses all the modules

const isEvenModule = require("./modules/isEven");
const logger = require("./modules/logger");
const fileManager = require("./fileManager");
const dice = require("./dice");

console.log("\n╔════════════════════════════════════════════════════════╗");
console.log("║     SMART UTILITY TOOLKIT - Lab Assignment 1          ║");
console.log("╚════════════════════════════════════════════════════════╝\n");

// ============= Test 1: Custom Module (isEven) =============
console.log("─── Test 1: Custom Module (isEven) ───");
const testNumber = 42;
const analysis = isEvenModule.analyzeNumber(testNumber);
console.log(`Number: ${testNumber}`);
console.log(`Is Even: ${analysis.isEven}`);
console.log(`Is Odd: ${analysis.isOdd}`);
console.log(`Square: ${analysis.square}`);
console.log(`Cube: ${analysis.cube}\n`);

// ============= Test 2: File Manager Operations =============
console.log("─── Test 2: File Manager Operations ───");
const testFile = "./learning-fs-module.txt";
fileManager.createFileSync(testFile, "Learning FS Module");
fileManager.readFileSync(testFile);
fileManager.updateFileSync(testFile, "File Updated");
fileManager.readFileSync(testFile);
fileManager.deleteFileSync(testFile);
console.log();

// ============= Test 3: Dice Generator =============
console.log("─── Test 3: Dice Generator ───");
const diceResults = dice.rollMultipleDice(5);
console.log();

// ============= Test 4: Logger Module =============
console.log("─── Test 4: Logger Module ───");
logger.info("Application initialized");
logger.warn("This is a warning message");
logger.error("This is an error message (recovered gracefully)");
console.log();

console.log("╔════════════════════════════════════════════════════════╗");
console.log("║  All components tested successfully!                  ║");
console.log("║  Run 'node server.js' to start HTTP server            ║");
console.log("║  Run 'node calculator.js add 10 5' to test calculator ║");
console.log("╚════════════════════════════════════════════════════════╝\n");
