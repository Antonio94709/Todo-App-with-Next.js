<<<<<<< HEAD
import { apitask } from "../../data/Apitasks";
import { PrismaClient } from "@prisma/client";
=======
import {apitask} from "../../data/Apitasks";
import {PrismaClient} from "@prisma/client";
>>>>>>> origin/apiroutes

const prisma = new PrismaClient();

export default async function handler(req, res) {
<<<<<<< HEAD
  if (req.method === "GET") {
    //Get all tasks form DB
    const tasks = await prisma.apitasks.findMany();
    console.log(tasks);
    //respond with task entries
    res.status(200).json(tasks);
  } else if (req.method === "POST") {
    const uniqueId = Math.random();
    const apitaskli = req.body.apitaskli;
    //Insert new task in Database
    const insertTask = await prisma.apitasks.create({
      data: {
        text: apitaskli,
      },
    });
    // const newApitakli = {
    //     id: Math.random(),
    //     text: apitaskli,
    // };
    // apitask.push(newApitakli);
    res.status(200).json(insertTask);
  }
=======
    if (req.method === "GET") {
        //Get all tasks form DB
        const tasks = await prisma.apitasks.findMany();
        console.log(tasks)
        //respond with task entries
        res.status(200).json(tasks);


    } else if (req.method === "POST") {
        const apitaskli = req.body.apitaskli;
        //Insert new task in Database
        const insertTask = await prisma.apitasks.create({
            data: {
                text: apitaskli
            }
        });
        // const newApitakli = {
        //     id: Math.random(),
        //     text: apitaskli,
        // };
        // apitask.push(newApitakli);
        res.status(200).json(insertTask);
    }
>>>>>>> origin/apiroutes
}
