const db = require("../db");

async function seed() {
  await db.user.createMany({
    data: [
      {
        firstname: "Toto",
        lastname: "Alaplage",
        agency: "Lyon",
        email: "toto@alaplage.com",
        picture: "/image/dragon.png",
        xpyear: 2,
      },
      {
        firstname: "Martine",
        lastname: "Selacouledouce",
        agency: "Annecy",
        email: "mslcd@wahoo.com",
        picture: "/image/dragon.png",
        xpyear: 35,
      },
      {
        firstname: "Raymond",
        lastname: "Alabarre",
        agency: "Nantes",
        email: "ralb@ol.com",
        picture: "/image/dragon.png",
        xpyear: 47,
      },
      {
        firstname: "Kiki",
        lastname: "Mbappe",
        agency: "Paris",
        email: "dugrosfoot@velodrome.fr",
        picture: "/image/dragon.png",
        xpyear: 1,
      },
      {
        firstname: "Claire",
        lastname: "Obscur",
        agency: "Lyon",
        email: "jour@nuit.com",
        picture: "/image/dragon.png",
        xpyear: 1,
      },
    ],
  });
  await db.concept.createMany({
    data: [
      {
        name: "Ma super idée",
        description: "best idea ever like for real ykwim?",
        domain: "phamarcology",
        status: "en cours",
        picture: "/image/fusee.png",
        agency: "chinatown",
      },
      {
        name: "Trois petits chats",
        description:
          "chapeau de paille, paillasson, somnifère, fer a cheval...",
        domain: "chanson",
        status: "en cours",
        picture: "/image/fusee.png",
        agency: "chinatown",
      },
      {
        name: "Boire des coups",
        description: "404 not found",
        domain: "boredom",
        status: "en cours",
        picture: "/image/fusee.png",
        agency: "chinatown",
      },
      {
        name: "La pâte à tartiner",
        description: "A la cuillère ou au couteau? Vous avez 4h.",
        domain: "philosofy",
        status: "en cours",
        picture: "/image/fusee.png",
        agency: "chinatown",
      },
      {
        name: "Une meilleure idée encore",
        description: "Who gives a damn. Amarite?!",
        domain: "Existence",
        status: "en cours",
        picture: "/image/fusee.png",
        agency: "chinatown",
      },
    ],
  });
  await db.techno.createMany({
    data: [
      {
        name: "Javapas",
        picture: "/image/java.png",
      },
      {
        name: "THC",
        picture: "/image/java.png",
      },
      {
        name: "C~",
        picture: "/image/java.png",
      },
      {
        name: "PH+/-",
        picture: "/image/java.png",
      },
      {
        name: "Snake",
        picture: "/image/java.png",
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
