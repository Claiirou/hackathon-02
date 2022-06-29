const db = require("../db");

async function seed() {
  await db.create({ data: { email: "test@visitor.com", name: "test" } });
}

seed();

module.exports = seed;
