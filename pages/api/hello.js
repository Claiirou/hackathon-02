// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import base from "../../middlewares/common";

function handleGet(req, res) {
  res.status(200).json({ name: "John Doe" });
}

function handlePatch(req, res) {
  res.status(201).json({ name: "John Doe" });
}

function handlePost(req, res) {
  res.status(201).json({ name: "John Doe" });
}

export default base().get(handleGet).post(handlePost).patch(handlePatch);
