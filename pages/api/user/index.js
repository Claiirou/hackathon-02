import base from "../../../middlewares/common";
import { createUser, findAllUsers } from "../../../models/user";

async function handlePostUser(req, res) {
  const { firstname, lastname, agency, email, picture, biography, xpyear } =
    req.body;
  return res.status(201).send(
    await createUser({
      firstname,
      lastname,
      agency,
      email,
      picture,
      biography,
      xpyear,
    })
  );
}

async function handleGetUsers(req, res) {
  const usersToGet = await findAllUsers();
  if (!userToGet) res.status(404).send("not found");
  else res.send(await findAllUsers());
}

export default base().post(handlePostUser).get(handleGetUsers);
