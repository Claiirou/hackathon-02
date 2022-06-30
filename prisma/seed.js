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

  const poule01 = await db.user.create({
    data: {
      firstname: "Poule",
      lastname: "Bocuse",
      agency: "Poullaillerie",
      email: "poulebocuse@alapoulaillerie.com",
      picture: "/image/poule01.jpg",
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

  const spatial01 = await db.concept.create({
    data: {
      name: "spatial",
      description: "best idea ever",
      domain: "espage",
      status: "en cours",
      picture: "/image/fusee01.jpg",
      agency: "chinapool",
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
      picture: "/image/java.png",
    },
  });
  await db.match.create({
    data: {
      likeconcept: true,
      likeuser: true,
      userId: poule01.id,
      conceptId: spatial01.id,
    },
  });
}

seed();

module.exports = seed;
