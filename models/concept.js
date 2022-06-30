const db = require("../db");

module.exports.createConcept = ({
  name,
  description,
  domain,
  status,
  picture,
  agency,
}) => {
  return db.concept.create({
    data: { name, description, domain, status, picture, agency },
  });
};

module.exports.findAllConcepts = () => db.concept.findMany();

module.exports.getOneConcept = (id) => {
  return db.concept.findUnique({ where: { id: parseInt(id, 10) } });
};
