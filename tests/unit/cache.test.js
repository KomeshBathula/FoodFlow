const assert = require("assert");

class MockCache {
  constructor() {
    this.store = new Map();
  }
  set(k, v) {
    this.store.set(k, v);
  }
  get(k) {
    return this.store.get(k) || null;
  }
}

console.log("Running Cache Abstraction Unit Tests...");

const cache = new MockCache();
cache.set("test_key", JSON.stringify({ count: 42 }));
const val = JSON.parse(cache.get("test_key"));

assert.strictEqual(val.count, 42, "Cache hit must return stored JSON");
assert.strictEqual(cache.get("non_existent"), null, "Cache miss must return null");

console.log("Cache Abstraction Unit Tests PASSED (2/2)");
