const db = require("../db");

async function seed() {
  await db.user.create({
    data: {
      firstname: "toto",
      lastname: "alaplage",
      agency: "lyon",
      email: "toto@alaplage.com",
      picture: "/image/profil.jpg",
      xpyear: 2,
    },
  });
}

seed();

module.exports = seed;
