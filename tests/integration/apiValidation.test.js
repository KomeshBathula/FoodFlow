const assert = require("assert");

function validateCreateBatch(payload) {
  if (!payload.foodName || typeof payload.foodName !== "string") return false;
  if (!payload.quantityKg || payload.quantityKg <= 0) return false;
  if (!payload.category) return false;
  return true;
}

console.log("Running API Validation Tests...");

assert.strictEqual(validateCreateBatch({ foodName: "Biryani", quantityKg: 20, category: "COOKED_MEALS" }), true);
assert.strictEqual(validateCreateBatch({ foodName: "", quantityKg: 20, category: "COOKED_MEALS" }), false);
assert.strictEqual(validateCreateBatch({ foodName: "Biryani", quantityKg: -5, category: "COOKED_MEALS" }), false);

console.log("API Validation Tests PASSED (3/3)");
