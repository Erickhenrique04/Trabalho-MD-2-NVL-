import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {

    var cod = req.query;
    var lista = controleLivro.excluir(Number(cod));

    res.status(200).json(cod);

 }
