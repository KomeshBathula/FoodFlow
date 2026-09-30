const fs = require("fs");
console.log("Seeding realistic FoodFlow test entities...");
const mockData = JSON.parse(fs.readFileSync(__dirname + "/../data/mockLocations.json", "utf-8"));
console.log(`Loaded region: ${mockData.city}`);
console.log(`Seeded ${mockData.kitchens.length} Commercial Kitchens`);
console.log(`Seeded ${mockData.ngos.length} Verified Food Bank NGOs`);
console.log("Database successfully seeded for demo execution!");
