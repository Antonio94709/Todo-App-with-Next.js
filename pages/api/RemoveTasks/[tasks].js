import { apitask } from "../../../data/Apitasks";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req, res) {
  const { ataskid } = req.query;

  if (req.method === "GET") {
    const atask = prisma.find((atask) => atask.id === parseInt(ataskid));
    res.status(200).json(atask);
  } else if (req.method === "DELETE") {
    const deletedApiTask = prisma.find(
      (atask) => atask.id === parseInt(ataskid)
    );

    const index = prisma.findIndex((apitas) => apitas.id === parseInt(ataskid));
    prisma.splice(index, 1);
    res.status(200).json(deletedApiTask);
  }
}
