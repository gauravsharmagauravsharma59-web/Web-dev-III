# Web Dev - III Assignments

## Repository Overview

This repository contains complete solutions for Web Dev - III (Node.js & Express Backend) lab assignments.

**Course:** Web Dev III - Node.js & Express Backend  
**Total Marks:** 2.5  
**Status:** ✅ Complete

---

## Lecture 1 - Smart Utility Toolkit

### Assignment Overview

Build multiple mini utilities using Node.js core modules:
1. ✅ CLI-Based Calculator (process.argv)
2. ✅ Custom Module Creation (isEven)
3. ✅ HTTP Server with Routing
4. ✅ File Manager (CRUD Operations)
5. ✅ Random Dice Generator (crypto)

### Quick Start

```bash
# Navigate to Lecture 1
cd "Lecture 1"

# Install dependencies (npm init already done)
npm install

# Run the complete application
npm start

# Or run individual components
npm run calc add 10 5          # Calculator
npm run server                 # HTTP Server
npm run app                    # Application demo
```

### Project Structure

```
Lecture 1/
├── calculator.js              # CLI Calculator
├── app.js                     # Main application
├── server.js                  # HTTP Server (localhost:3000)
├── fileManager.js             # File operations
├── dice.js                    # Dice generator
├── index.js                   # Entry point
├── modules/
│   ├── isEven.js              # Custom module
│   └── logger.js              # Logger utility
├── package.json
└── README.md                  # Detailed documentation
```

### Features

#### 1. Calculator
```bash
node calculator.js add 10 5        # Result: 15
node calculator.js subtract 20 8   # Result: 12
node calculator.js multiply 5 6    # Result: 30
node calculator.js divide 100 4    # Result: 25
```

#### 2. HTTP Server
```bash
npm run server
# Visit: http://localhost:3000/
# Routes: /, /about, /contact
```

#### 3. File Manager
- Create files
- Read contents
- Update/append content
- Delete files

#### 4. Dice Generator
- Generate random dice rolls (1-6)
- Multiple rolls with statistics
- Cryptographically secure

#### 5. Custom Modules
- `isEven()` - Check even numbers
- `isOdd()` - Check odd numbers
- `analyzeNumber()` - Full analysis
- `logger` - Utility logging

### Sample Output

```
╔════════════════════════════════════════════════════════╗
║     SMART UTILITY TOOLKIT - Lab Assignment 1          ║
╚════════════════════════════════════════════════════════╝

─── Test 1: Custom Module (isEven) ───
Number: 42
Is Even: true
Square: 1764
Cube: 74088

─── Test 2: File Manager ───
File created: ./learning-fs-module.txt
File contents: Learning FS Module
File updated: ./learning-fs-module.txt
File deleted: ./learning-fs-module.txt

─── Test 3: Dice Generator ───
Rolling 5 dice...
Roll 1: 5, Roll 2: 4, Roll 3: 6, Roll 4: 2, Roll 5: 2
Sum: 19, Average: 3.80

─── Test 4: Logger ───
[INFO] Application initialized
[WARN] This is a warning message
[ERROR] This is an error message (recovered gracefully)
```

### Technology Stack

- **Node.js** - JavaScript runtime
- **Core Modules:**
  - `process` - CLI arguments
  - `http` - Server & routing
  - `fs` - File operations
  - `crypto` - Random generation

### Restrictions

✅ No external npm packages  
✅ No Express.js  
✅ No third-party frameworks  
✅ Only Node.js core modules  

### Testing Status

- ✅ Calculator: All operations verified
- ✅ Custom Modules: Module reusability confirmed
- ✅ HTTP Server: All routes tested
- ✅ File Manager: CRUD operations working
- ✅ Dice Generator: Random generation secure

---

## GitHub Repository

**URL:** https://github.com/gauravsharmagauravsharma59-web/Web-dev-III

---

## How to Use This Repository

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gauravsharmagauravsharma59-web/Web-dev-III.git
   ```

2. **Navigate to Lecture 1:**
   ```bash
   cd "Web-dev-III/Lecture 1"
   ```

3. **Run the assignment:**
   ```bash
   npm start
   ```

4. **Test specific components:**
   ```bash
   npm run calc add 15 10    # Test calculator
   npm run server            # Start HTTP server
   npm run app               # Run all utilities demo
   ```

---

## Assignment Details

**Course:** Web Dev III (Node.js & Express Backend)  
**Unit:** Unit-1  
**Marks:** 2.5  
**Mode:** 100% In-Class (Lab Practicals)  
**Duration:** 45-60 minutes  

### Rubric

| Criteria | Marks |
|----------|-------|
| Functionality | 1.5 |
| Code Structure & Modules | 0.5 |
| Clean Code & Output | 0.5 |
| **Total** | **2.5** |

---

**Status:** ✅ Assignment Complete  
**Last Updated:** August 29, 2026  
**Author:** Gourav Sharma
