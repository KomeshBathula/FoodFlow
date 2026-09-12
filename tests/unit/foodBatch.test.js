const assert = require("assert");

function calculateBeneficiaries(quantityKg) {
  return Math.round(quantityKg * 2.5);
}

function validateShelfLife(prepTimeIso, expiryTimeIso) {
  const prep = new Date(prepTimeIso).getTime();
  const exp = new Date(expiryTimeIso).getTime();
  return exp > prep;
}

console.log("Running FoodBatch Unit Tests...");

// Test 1: Beneficiary conversion factor (2.5 persons per kg)
assert.strictEqual(calculateBeneficiaries(10), 25, "10 kg should serve ~25 people");
assert.strictEqual(calculateBeneficiaries(40), 100, "40 kg should serve ~100 people");

// Test 2: Shelf life validation
const now = new Date();
const past = new Date(now.getTime() - 3600000);
const future = new Date(now.getTime() + 3600000);

assert.strictEqual(validateShelfLife(now.toISOString(), future.toISOString()), true, "Expiry after prep must pass");
assert.strictEqual(validateShelfLife(now.toISOString(), past.toISOString()), false, "Expiry before prep must fail");

console.log("FoodBatch Unit Tests PASSED (2/2)");
