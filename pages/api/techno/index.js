import base from "../../../middlewares/common";
import { findAllTechno } from "../../../models/techno";

async function handleGetTechno(req, res) {
  res.send(await findAllTechno()).catch((err) => {
    console.log(err);
    res.status(500).send("Error retrieving the categories from tdatabase");
  });
}

export default base().get(handleGetTechno);
