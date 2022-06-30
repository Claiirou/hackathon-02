import base from "../../../middlewares/common";
import { getOneConcept } from "../../../models/concept";

async function handleGetOneConcept(req, res) {
  const concept = await getOneConcept(req.query.id);
  return res.status(201).send(concept);
}

export default base().get(handleGetOneConcept);
