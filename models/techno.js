const db = require("../db");

module.exports.findAllTechno = () => db.techno.findMany().catch((_) => false);
