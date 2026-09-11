const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/foodflow";

const users = [
  { name: "Platform Admin", email: "admin@foodflow.org", role: "ADMIN", organizationName: "FoodFlow Admin HQ" },
  { name: "Annapurna Central Kitchen", email: "kitchen@foodflow.org", role: "KITCHEN", organizationName: "Annapurna Kitchens" },
  { name: "Roti Bank Foundation", email: "ngo@foodflow.org", role: "NGO", organizationName: "Roti Bank NGO" },
  { name: "Rajesh Express Driver", email: "driver@foodflow.org", role: "DRIVER", organizationName: "GreenFleet Logistics" },
  { name: "Citizen Reviewer", email: "user@foodflow.org", role: "USER", organizationName: "General Public" }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB for user seeding");

    const UserSchema = new mongoose.Schema({
      name: String, email: { type: String, unique: true }, passwordHash: String, role: String, organizationName: String, isActive: Boolean
    }, { timestamps: true });

    const User = mongoose.models.User || mongoose.model("User", UserSchema);

    for (const u of users) {
      const passwordHash = await bcrypt.hash("demo123", 10);
      await User.findOneAndUpdate(
        { email: u.email },
        { ...u, passwordHash, isActive: true },
        { upsert: true, new: true }
      );
      console.log(`Seeded user: ${u.email} (${u.role})`);
    }

    console.log("Demo user seed completed successfully!");
    await mongoose.disconnect();
  } catch (err) {
    console.error("Seed error:", err);
  }
}

seed();
