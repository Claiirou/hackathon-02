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
  const matchToGet = await findAllMatchs();
  if (!matchToGet) res.status(404).send("not found");
  else res.send(await findAllMatchs());
}

export default base().post(handlePostMatch).get(handleGetMatch);
