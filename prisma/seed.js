const db = require("../db");

async function seed() {
  const poule = await db.user.create({
    data: {
      firstname: "Poule",
      lastname: "Bocuse",
      agency: "Poullaillerie",
      email: "poulebocuse@alapoulaillerie.com",
      picture: "/image/poule01.jpg",
      xpyear: 2,
    },
  });
  const martine = await db.user.create({
    data: {
      firstname: "Martine",
      lastname: "Selacouledouce",
      agency: "Annecy",
      email: "mslcd@wahoo.com",
      picture: "/image/martine.jpeg",
      xpyear: 7,
    },
  });
  const raymond = await db.user.create({
    data: {
      firstname: "Raymond",
      lastname: "Barré",
      agency: "Lilles",
      email: "rmb@lafronce.com",
      picture: "/image/raymond.jpeg",
      xpyear: 35,
    },
  });
  const kiki = await db.user.create({
    data: {
      firstname: "Kiki",
      lastname: "Mbappe",
      agency: "Paris",
      email: "kiki@dufoot.com",
      picture: "/image/kiki.jpeg",
      xpyear: 2,
    },
  });
  const claire = await db.user.create({
    data: {
      firstname: "Claire",
      lastname: "Obscur",
      agency: "Montpellier",
      email: "clairement@adonf.com",
      picture: "/image/claire.jpeg",
      xpyear: 35,
    },
  });

  const idee01 = await db.concept.create({
    data: {
      name: "spatial",
      description: "best idea ever",
      domain: "espage",
      status: "en cours",
      picture: "/image/fusee01.jpg",
      agency: "chinapool",
    },
  });

  const idee02 = await db.concept.create({
    data: {
      name: "on est bien là",
      description: "best idea ever",
      domain: "phamarcology",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });
  const idee03 = await db.concept.create({
    data: {
      name: "Une meilleure idée encore",
      description: "Who gives a damn. Amarite?!",
      domain: "Existence",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });
  const idee04 = await db.concept.create({
    data: {
      name: "Time for a beer ain't it?",
      description: "Or a lot. Up to you guys?!",
      domain: "Existence",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });
  const idee05 = await db.concept.create({
    data: {
      name: "More border-radius on buttons",
      description: "Clearly the true meaning of life",
      domain: "Existence",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });

  await db.techno.createMany({
    data: [
      {
        name: "Javapas",
        picture: "/image/java.png",
      },
      {
        name: "THC",
        picture: "/image/thx.jpeg",
      },
      {
        name: "C~",
        picture: "/image/tilde.png",
      },
      {
        name: "PH+/-",
        picture: "/image/PH.jpeg",
      },
      {
        name: "Snake",
        picture: "/image/snake.jpeg",
      },
    ],
  });

  await db.match.create({
    data: {
      likeconcept: true,
      likeuser: true,
      userId: kiki.id,
      conceptId: idee05.id,
    },
  });
  await db.match.create({
    data: {
      likeconcept: true,
      likeuser: true,
      userId: martine.id,
      conceptId: idee04.id,
    },
  });
  await db.match.create({
    data: {
      likeconcept: true,
      likeuser: true,
      userId: claire.id,
      conceptId: idee03.id,
    },
  });
  await db.match.create({
    data: {
      likeconcept: true,
      likeuser: true,
      userId: raymond.id,
      conceptId: idee02.id,
    },
  });
  await db.match.create({
    data: {
      likeconcept: true,
      likeuser: true,
      userId: poule.id,
      conceptId: idee01.id,
    },
  });
}

seed();

module.exports = seed;
