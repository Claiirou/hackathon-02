import base from "../../../middlewares/common";
import { createUser, findAllUsers } from "../../../models/user";

async function handlePostUser(req, res) {
  const { firstname, lastname, agency, email, picture, biogagraphy, xpyear } =
    req.body;
  return res.status(201).send(
    await createUser({
      firstname,
      lastname,
      agency,
      email,
      picture,
      biogagraphy,
      xpyear,
    })
  );
}

async function handleGetUsers(req, res) {
  res.send(await findAllUsers());
}

export default base().post(handlePostUser).get(handleGetUsers);
