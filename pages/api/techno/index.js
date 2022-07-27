import base from "../../../middlewares/common";
import { findAllTechno } from "../../../models/techno";

async function handleGetTechno(req, res) {
  const technoToGet = await findAllTechno();
  if (!technoToGet) res.status(404).send("not found");
  else res.send(await findAllTechno());
}

export default base().get(handleGetTechno);
