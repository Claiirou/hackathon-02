const db = require("../db");

module.exports.createMatch = ({ likeconcept, likeuser }) => {
  return db.match.create({
    data: { likeconcept, likeuser },
  });
};

module.exports.findAllMatchs = () =>
  db.match.findMany({
    include: {
      users: {
        select: {
          firstname: true,
          lastname: true,
          agency: true,
          email: true,
          picture: true,
          biography: true,
          xpyear: true,
        },
      },
      concepts: {
        select: {
          name: true,
          description: true,
          domain: true,
          status: true,
          picture: true,
          agency: true,
        },
      },
    },
  });

module.exports.getOneMatch = (id) => {
  return db.match.findUnique({ where: { id: parseInt(id, 10) } });
};
