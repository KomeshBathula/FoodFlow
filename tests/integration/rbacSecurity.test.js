const assert = require("assert");

function authorizeEndpoint(role, requiredRole) {
  if (role === "ADMIN") return true; // Admin bypass
  return role === requiredRole;
}

console.log("Running RBAC Security Matrix Tests...");

assert.strictEqual(authorizeEndpoint("ADMIN", "KITCHEN"), true, "Admin can access Kitchen route");
assert.strictEqual(authorizeEndpoint("KITCHEN", "KITCHEN"), true, "Kitchen can access Kitchen route");
assert.strictEqual(authorizeEndpoint("USER", "KITCHEN"), false, "User must be denied Kitchen route");
assert.strictEqual(authorizeEndpoint("DRIVER", "ADMIN"), false, "Driver must be denied Admin route");

console.log("RBAC Security Matrix Tests PASSED (4/4)");
