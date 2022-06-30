const db = require("../db");

async function seed() {
  const toto = await db.user.create({
    data: {
      firstname: "Toto",
      lastname: "Alaplage",
      agency: "Lyon",
      email: "toto@alaplage.com",
      picture: "/image/dragon.png",
      xpyear: 2,
    },
  });
  const martine = await db.user.create({
    data: {
      firstname: "Martine",
      lastname: "Selacouledouce",
      agency: "Annecy",
      email: "mslcd@wahoo.com",
      picture: "/image/martine.jpeg.png",
      xpyear: 35,
    },
  });
  const raymond = await db.user.create({
    data: {
      firstname: "Raymond",
      lastname: "Alabarre",
      agency: "Nantes",
      email: "ralb@ol.com",
      picture: "/image/raymond.jpeg",
      xpyear: 47,
    },
  });

  const kiki = await db.user.create({
    data: {
      firstname: "Kiki",
      lastname: "Mbappe",
      agency: "Paris",
      email: "dugrosfoot@velodrome.fr",
      picture: "/image/kiki.jpeg",
      xpyear: 1,
    },
  });

  const claire = await db.user.create({
    data: {
      firstname: "Claire",
      lastname: "Obscur",
      agency: "Lyon",
      email: "jour@nuit.com",
      picture: "/image/claire.jpeg",
      xpyear: 1,
    },
  });

  const idee01 = await db.concept.create({
    data: {
      name: "Ma super idée",
      description: "best idea ever like for real ykwim?",
      domain: "phamarcology",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });

  const idee02 = await db.concept.create({
    data: {
      name: "Trois petits chats",
      description: "chapeau de paille, paillasson, somnifère, fer a cheval...",
      domain: "chanson",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });

  const idee03 = await db.concept.create({
    data: {
      name: "Boire des coups",
      description: "404 not found",
      domain: "boredom",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });

  const idee04 = await db.concept.create({
    data: {
      name: "La pâte à tartiner",
      description: "A la cuillère ou au couteau? Vous avez 4h.",
      domain: "philosofy",
      status: "en cours",
      picture: "/image/fusee.png",
      agency: "chinatown",
    },
  });

  idee05 = await db.concept.create({
    data: {
      name: "Une meilleure idée encore",
      description: "Who gives a damn. Amarite?!",
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
    },
  });
}

seed();

module.exports = seed;
