import base from "../../../middlewares/common";
import { getOneMatch } from "../../../models/match";

async function handleGetOneMatch(req, res) {
  const match = await getOneMatch(req.query.id);
  return res.status(201).send(match);
}

export default base().get(handleGetOneMatch);
