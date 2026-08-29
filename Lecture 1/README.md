# Lab Assignment 1 - Smart Utility Toolkit

**Course:** Web Dev III (Node.js & Express Backend)  
**Unit Covered:** Unit-1  
**Marks:** 2.5  
**Time:** 45-60 minutes  

## Overview

This is a hands-on lab assignment designed to help students understand the fundamentals of backend development using Node.js core modules. The assignment focuses on command-line interaction, modular programming, server creation, file handling, and randomness generation—without using any external packages or frameworks.

## Project Structure

```
Lecture 1/
├── calculator.js          # CLI-based calculator
├── app.js                 # Main application demonstration
├── server.js              # HTTP server with routing
├── fileManager.js         # File operations module
├── dice.js                # Random dice generator
├── index.js               # Entry point
├── testServer.js          # Server testing script
├── modules/
│   ├── isEven.js          # Custom module for even/odd checking
│   └── logger.js          # Logger utility module
├── package.json           # Project configuration
└── README.md              # This file
```

## Features Implemented

### 1. ✅ CLI-Based Calculator using process.argv

A command-line calculator that accepts arguments and performs operations:

```bash
# Usage
node calculator.js <operation> <num1> <num2>

# Examples
node calculator.js add 10 5           # Output: Result: 10 + 5 = 15
node calculator.js subtract 20 8      # Output: Result: 20 - 8 = 12
node calculator.js multiply 5 6       # Output: Result: 5 * 6 = 30
node calculator.js divide 100 4       # Output: Result: 100 / 4 = 25
```

**Operations Supported:**
- Addition (+, add)
- Subtraction (-, subtract)
- Multiplication (*, multiply)
- Division (/, divide)

---

### 2. ✅ Custom Module Creation & Reusability (isEven)

A custom Node.js module demonstrating `module.exports` and `require()`:

**File:** `modules/isEven.js`
- `isEven(num)` - Check if number is even
- `isOdd(num)` - Check if number is odd
- `analyzeNumber(num)` - Analyze number properties (square, cube, etc.)

---

### 3. ✅ Basic HTTP Server using http Module

A lightweight HTTP server running on localhost:3000 with multiple routes:

```bash
node server.js
# Server runs at http://localhost:3000/
```

**Routes:**

| Route | Response |
|-------|----------|
| `/` | Welcome message |
| `/about` | About page |
| `/contact` | Contact information |
| `/*` | 404 Error Page |

**Access:**
- Home: `http://localhost:3000/`
- About: `http://localhost:3000/about`
- Contact: `http://localhost:3000/contact`

---

### 4. ✅ File Manager using fs Module

Implement CRUD operations:

**Operations:**
- **Create:** `writeFile()` - Create new files
- **Read:** `readFile()` - Read file contents
- **Update:** `appendFile()` - Add content to files
- **Delete:** `unlink()` - Remove files

**Methods Available:**
- `createFileSync(filename, content)` - Synchronous file creation
- `readFileSync(filename)` - Synchronous file reading
- `updateFileSync(filename, content)` - Synchronous file update
- `deleteFileSync(filename)` - Synchronous file deletion

---

### 5. ✅ Random Dice Generator using crypto Module

Generate cryptographically secure random numbers (1-6):

```bash
# Used in app.js demonstration
# Output shows multiple dice rolls with sum and average
```

**Functions:**
- `rollDice()` - Single dice roll (1-6)
- `rollMultipleDice(numRolls)` - Multiple rolls with statistics
- `secureRandomDice()` - Promise-based random generation

---

## How to Run

### 1. **Run Complete Application Demo**

```bash
npm start
# or
node index.js
# or
node app.js
```

This demonstrates all utilities with sample output.

### 2. **Test Calculator**

```bash
npm run calc add 15 10
npm run calc multiply 7 8
npm run calc divide 50 2
```

### 3. **Run HTTP Server**

```bash
npm run server
# Visit http://localhost:3000 in your browser
```

### 4. **Test Individual Modules**

```bash
node -e "const isEven = require('./modules/isEven'); console.log(isEven.analyzeNumber(42));"
```

## Console Output Examples

### Application Output
```
╔════════════════════════════════════════════════════════╗
║     SMART UTILITY TOOLKIT - Lab Assignment 1          ║
╚════════════════════════════════════════════════════════╝

─── Test 1: Custom Module (isEven) ───
Number: 42
Is Even: true
Is Odd: false
Square: 1764
Cube: 74088

─── Test 2: File Manager Operations ───
[2026-08-29T14:36:35.140Z] INFO: File created: ./learning-fs-module.txt
[2026-08-29T14:36:35.144Z] INFO: File contents: Learning FS Module
[2026-08-29T14:36:35.145Z] INFO: File updated: ./learning-fs-module.txt
[2026-08-29T14:36:35.145Z] INFO: File deleted: ./learning-fs-module.txt

─── Test 3: Dice Generator ───
[2026-08-29T14:36:35.147Z] INFO: Rolling 5 dice...
Roll 1: 5
Roll 2: 4
Roll 3: 6
Roll 4: 2
Roll 5: 2
Total Rolls: 5
Sum: 19
Average: 3.80

─── Test 4: Logger Module ───
[2026-08-29T14:36:35.148Z] INFO: Application initialized
[2026-08-29T14:36:35.148Z] WARN: This is a warning message
[2026-08-29T14:36:35.148Z] ERROR: This is an error message (recovered gracefully)
```

### Calculator Output
```
Result: 10 + 5 = 15
Result: 20 - 8 = 12
Result: 5 * 6 = 30
Result: 100 / 4 = 25
```

## Technology Stack

- **Node.js** - JavaScript runtime environment
- **Core Modules Used:**
  - `process` - Command-line argument handling
  - `http` - Server creation and routing
  - `fs` - File system operations
  - `crypto` - Secure random number generation

## Restrictions Adhered

✅ No external npm packages allowed  
✅ No Express.js or third-party frameworks  
✅ No database integration  
✅ Only Node.js built-in modules used  
✅ Programs run via terminal commands  

## Learning Outcomes

- ✅ Node.js executes JavaScript outside the browser
- ✅ Using `process.argv` for command-line inputs
- ✅ Creating and reusing custom modules
- ✅ Building HTTP servers with routing
- ✅ CRUD operations with file system
- ✅ Secure random generation with crypto
- ✅ Modular and reusable code practices
- ✅ Console logging and debugging

## Bonus Features Implemented

- ✅ Logger module with timestamps
- ✅ Comprehensive error handling
- ✅ Multiple operation support in calculator
- ✅ Async and sync file operations
- ✅ HTML responses from HTTP server
- ✅ Statistics for dice rolls (sum, average)

## Testing

All components have been tested and verified:

```bash
✅ Calculator: All operations working (add, subtract, multiply, divide)
✅ Custom Modules: isEven module tested and reusable
✅ HTTP Server: Routes responding correctly (/, /about, /contact, 404)
✅ File Manager: CRUD operations working
✅ Dice Generator: Random number generation verified
✅ Logger: Timestamps and message levels working
```

## GitHub Repository

[https://github.com/gauravsharmagauravsharma59-web/Web-dev-III](https://github.com/gauravsharmagauravsharma59-web/Web-dev-III)

---

**Author:** Gourav Sharma  
**Date:** August 29, 2026  
**Status:** ✅ Complete
