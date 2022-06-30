const db = require("../db");

module.exports.createUser = ({
  firstname,
  lastname,
  agency,
  email,
  picture,
  biogagraphy,
  xpyear,
}) => {
  return db.user.create({
    data: { firstname, lastname, agency, email, picture, biogagraphy, xpyear },
  });
};

module.exports.findAllUsers = () => db.user.findMany();
