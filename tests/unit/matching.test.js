const assert = require("assert");

function calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(2));
}

console.log("Running NGO Matching Unit Tests...");

// Test 1: Known distance check (Bangalore points ~ 4.5km)
const dist = calculateHaversineDistanceKm(12.9716, 77.5946, 12.9352, 77.6245);
assert(dist > 4 && dist < 6, `Expected distance ~5km, got ${dist}`);

// Test 2: Distance to self is 0
const distZero = calculateHaversineDistanceKm(12.9716, 77.5946, 12.9716, 77.5946);
assert.strictEqual(distZero, 0, "Distance to self should be 0");

console.log("NGO Matching Unit Tests PASSED (2/2)");
