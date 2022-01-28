import { apitask } from "../../data/Apitasks";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(apitask);
  } else if (req.method === "POST") {
    const apitaskli = req.body.apitaskli;
    const newApitakli = {
      id: Math.random(),
      text: apitaskli,
    };
    apitask.push(newApitakli);
    res.status(200).json(newApitakli);
  }
}
