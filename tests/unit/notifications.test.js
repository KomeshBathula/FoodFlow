const assert = require("assert");

function formatNotification(role, type, title) {
  return `[${role}] [${type}] ${title}`;
}

console.log("Running Notification Unit Tests...");

// Test 1: Notification string formation
const str = formatNotification("KITCHEN", "SURPLUS_ALERT", "Surplus Food Detected");
assert.strictEqual(str, "[KITCHEN] [SURPLUS_ALERT] Surplus Food Detected");

console.log("Notification Unit Tests PASSED (1/1)");
