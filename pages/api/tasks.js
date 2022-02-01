import {apitask} from "../../data/Apitasks";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "GET") {
        //Get all tasks form DB
        const tasks = await prisma.apitasks.findMany();
        console.log(tasks);
        //respond with task entries
        res.status(200).json(tasks);
    } else if (req.method === "DELETE") {
        console.log("GONNA DELETE id: ", req.query.taskId);
        //Delete from DB with ID
        const deletedTask = await prisma.apitasks.delete({
            where: {id: req.query.taskId},
        });
        console.log(deletedTask);
        //Check if success
        if (deletedTask) {
            res.status(200).json({success: true, message: "Task Deleted", src: deletedTask});
        } else {
            res.status(400).json({success: false, message: "Could not delete"});
        }
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
}
