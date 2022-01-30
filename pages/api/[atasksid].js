import { apitask } from "../../data/Apitasks";

export default function handler(req, res) {
  const { ataskid } = req.query;

  if (req.method === "GET") {
    const atask = apitask.find((atask) => atask.id === parseInt(ataskid));
    res.status(200).json(atask);
  } else if (req.method === "DELETE") {
    const deletedApiTask = apitask.find(
      (atask) => atask.id === parseInt(ataskid)
    );

    const index = apitask.findIndex(
      (apitas) => apitas.id === parseInt(ataskid)
    );
    apitask.splice(index, 1);
    res.status(200).json(deletedApiTask);
  }
}
