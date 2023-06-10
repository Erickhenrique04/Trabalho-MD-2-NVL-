import ControleEditora from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora;

export default (req: NextApiRequest, res: NextApiResponse) => { 
    var editoras = controleEditora.getEditoras();
    res.status(200).json(editoras);
}
export const error = {
    onError: ( req: NextApiRequest, res: NextApiResponse, err:any) => {
      res.status(500).end(err.toString());
    },
    onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
      res.status(405).send("Method Not Allowed");
    },
  };
