import base from "../../../middlewares/common";
import { createMatch, findAllMatchs } from "../../../models/match";

async function handlePostMatch(req, res) {
  const { likeconcept, likeuser, userId, conceptId } = req.body;
  return res.status(201).send(
    await createMatch({
      likeconcept,
      likeuser,
      userId,
      conceptId,
    })
  );
}

async function handleGetMatch(req, res) {
  res.send(await findAllMatchs());
}

export default base().post(handlePostMatch).get(handleGetMatch);
