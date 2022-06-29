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
  await db.concept.create({
    data: {
      name: "on est bien là",
      description: "best idea ever",
      domain: "phamarcology",
      status: "en cours",
      picture: "/image/dragon.png",
      agency: "chinatown",
    },
  });
  await db.techno.create({
    data: {
      name: "Javapas",
      pictures: "/image/java.png",
    },
  });
}

seed();

module.exports = seed;
