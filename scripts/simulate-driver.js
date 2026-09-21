const http = require("http");

console.log("Simulating driver route telemetry events...");

const steps = [
  { lat: 12.9716, lng: 77.5946, label: "Picked up at kitchen" },
  { lat: 12.9643, lng: 77.6012, label: "En route - MG Road" },
  { lat: 12.9521, lng: 77.6105, label: "En route - Hosur junction" },
  { lat: 12.9352, lng: 77.6245, label: "Arrived at FeedHope NGO" }
];

steps.forEach((s, idx) => {
  console.log(`[Step ${idx + 1}/4] Driver coordinates: (${s.lat}, ${s.lng}) -> ${s.label}`);
});

console.log("Driver simulation completed successfully!");
