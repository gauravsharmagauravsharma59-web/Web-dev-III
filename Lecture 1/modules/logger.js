// Logger Module - Utility for console logging with timestamps

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] LOG: ${message}`);
}

function error(message) {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ERROR: ${message}`);
}

function warn(message) {
  const timestamp = new Date().toISOString();
  console.warn(`[${timestamp}] WARN: ${message}`);
}

function info(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] INFO: ${message}`);
}

module.exports = {
  log,
  error,
  warn,
  info,
};
