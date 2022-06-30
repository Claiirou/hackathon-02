const db = require("../db");

async function seed() {
  await db.user.create({
    data: {
      firstname: "toto",
      lastname: "alaplage",
      agency: "lyon",
      email: "toto@alaplage.com",
      picture: "/image/dragon.png",
      xpyear: 2,
    },
  });
  await db.concept.create({
    data: {
      name: "on est bien là",
      description: "best idea ever",
      domain: "phamarcology",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });
  await db.techno.create({
    data: {
      name: "Javapas",
      pictures: "/image/java.png",
    },
  });
  await db.match.create({
    data: {
      likeconcept: true,
      likeuser: true,
    },
  });
}

seed();

module.exports = seed;
