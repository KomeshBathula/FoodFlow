const { execSync } = require("child_process");

console.log("Running automated FoodFlow release verification...");
try {
  execSync("node tests/releaseVerification.test.js", { stdio: "inherit" });
} catch (e) {
  process.exit(1);
}
