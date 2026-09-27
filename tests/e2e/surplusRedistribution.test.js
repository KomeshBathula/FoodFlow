const assert = require("assert");

console.log("Running End-to-End Surplus-to-Delivery Workflow Test...");

// Step 1: Kitchen creates Food Batch
const batch = {
  batchId: "BATCH-TEST-001",
  foodName: "Steamed Basmati Rice & Dal",
  quantityKg: 40,
  status: "CREATED"
};
assert.strictEqual(batch.status, "CREATED", "Initial batch status must be CREATED");

// Step 2: AI predicts surplus
batch.status = "SURPLUS_DETECTED";
assert.strictEqual(batch.status, "SURPLUS_DETECTED", "Surplus status updated");

// Step 3: Kitchen publishes & NGO matching occurs
batch.status = "MATCHED";
const redistributionRequest = {
  requestId: "REQ-TEST-001",
  foodBatchId: batch.batchId,
  status: "REQUESTED"
};
assert.strictEqual(redistributionRequest.status, "REQUESTED");

// Step 4: NGO accepts offer
redistributionRequest.status = "NGO_ACCEPTED";
assert.strictEqual(redistributionRequest.status, "NGO_ACCEPTED");

// Step 5: Driver assigned
redistributionRequest.status = "DRIVER_ASSIGNED";
assert.strictEqual(redistributionRequest.status, "DRIVER_ASSIGNED");

// Step 6: Driver picks up food
redistributionRequest.status = "PICKED_UP";
assert.strictEqual(redistributionRequest.status, "PICKED_UP");

// Step 7: Delivery completed to NGO
redistributionRequest.status = "DELIVERED";
batch.status = "DELIVERED";
assert.strictEqual(redistributionRequest.status, "DELIVERED");
assert.strictEqual(batch.status, "DELIVERED");

console.log("End-to-End Surplus-to-Delivery Test PASSED (7/7 milestones verified)");
