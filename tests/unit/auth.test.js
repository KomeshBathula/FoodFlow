const assert = require("assert");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkRbac(userRole, allowedRoles) {
  return allowedRoles.includes(userRole);
}

console.log("Running Auth Unit Tests...");

// Test 1: Email validation
assert.strictEqual(validateEmail("admin@foodflow.org"), true, "Valid email must pass");
assert.strictEqual(validateEmail("invalid-email"), false, "Invalid email must fail");

// Test 2: RBAC authorization
assert.strictEqual(checkRbac("ADMIN", ["ADMIN", "KITCHEN"]), true, "Admin should be allowed");
assert.strictEqual(checkRbac("USER", ["ADMIN", "KITCHEN"]), false, "User should be blocked from Admin/Kitchen routes");
assert.strictEqual(checkRbac("DRIVER", ["DRIVER"]), true, "Driver allowed for driver routes");

console.log("Auth Unit Tests PASSED (2/2)");
