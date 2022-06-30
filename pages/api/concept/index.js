import base from "../../../middlewares/common";
import { createConcept, findAllConcepts } from "../../../models/concept";

async function handlePostConcept(req, res) {
  const { name, description, domain, status, picture, agency } = req.body;
  return res.status(201).send(
    await createConcept({
      name,
      description,
      domain,
      status,
      picture,
      agency,
    })
  );
}

async function handleGetConcepts(req, res) {
  res.send(await findAllConcepts());
}

export default base().post(handlePostConcept).get(handleGetConcepts);
