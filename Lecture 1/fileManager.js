// 4. File Manager using fs Module
// Operations: Create, Read, Update, Delete files

const fs = require("fs");
const logger = require("./modules/logger");

const FILE_PATH = "./test.txt";

// Create File
function createFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      logger.error(`Failed to create file: ${err.message}`);
      return;
    }
    logger.info(`File created: ${filename}`);
  });
}

// Read File
function readFile(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      logger.error(`Failed to read file: ${err.message}`);
      return;
    }
    logger.info(`File contents:\n${data}`);
  });
}

// Update File (Append)
function updateFile(filename, content) {
  fs.appendFile(filename, `\n${content}`, (err) => {
    if (err) {
      logger.error(`Failed to update file: ${err.message}`);
      return;
    }
    logger.info(`File updated: ${filename}`);
  });
}

// Delete File
function deleteFile(filename) {
  fs.unlink(filename, (err) => {
    if (err) {
      logger.error(`Failed to delete file: ${err.message}`);
      return;
    }
    logger.info(`File deleted: ${filename}`);
  });
}

// Synchronous operations for testing
function createFileSync(filename, content) {
  try {
    fs.writeFileSync(filename, content);
    logger.info(`File created: ${filename}`);
  } catch (err) {
    logger.error(`Failed to create file: ${err.message}`);
  }
}

function readFileSync(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    logger.info(`File contents:\n${data}`);
    return data;
  } catch (err) {
    logger.error(`Failed to read file: ${err.message}`);
    return null;
  }
}

function updateFileSync(filename, content) {
  try {
    fs.appendFileSync(filename, `\n${content}`);
    logger.info(`File updated: ${filename}`);
  } catch (err) {
    logger.error(`Failed to update file: ${err.message}`);
  }
}

function deleteFileSync(filename) {
  try {
    fs.unlinkSync(filename);
    logger.info(`File deleted: ${filename}`);
  } catch (err) {
    logger.error(`Failed to delete file: ${err.message}`);
  }
}

module.exports = {
  createFile,
  readFile,
  updateFile,
  deleteFile,
  createFileSync,
  readFileSync,
  updateFileSync,
  deleteFileSync,
};
