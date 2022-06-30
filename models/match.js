const db = require("../db");

module.exports.createMatch = ({ likeconcept, likeuser }) => {
  return db.match.create({
    data: { likeconcept, likeuser },
  });
};

module.exports.findAllMatchs = () => db.match.findMany();

module.exports.getOneMatch = (id) => {
  return db.match.findUnique({ where: { id: parseInt(id, 10) } });
};
