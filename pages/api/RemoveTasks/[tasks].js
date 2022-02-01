import { apitask } from "../../../data/Apitasks";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { taskid } = req.query;

  if (req.method === "GET") {
    const atask = prisma.find((atask) => atask.id === parseInt(taskid));
    res.status(200).json(atask);
  } else if (req.method === "DELETE") {
    const deletedApiTask = prisma.find(
      (atask) => atask.id === parseInt(taskid)
    );

    const index = prisma.findIndex((apitas) => apitas.id === parseInt(taskid));
    prisma.splice(index, 1);
    res.status(200).json(deletedApiTask);
  }
}
