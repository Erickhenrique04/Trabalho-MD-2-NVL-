import ControleLivro from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro

export default async(req: NextApiRequest, res: NextApiResponse) => { 
    const {query} =req
    var livros = controleLivro.obterLivros();
    var livrosInclusos  = req.body.incluir;

    req.body

    switch(req.method){
        case "GET":
            res.status(200).json(livros);
            break;
            
        case "POST":
            res.status(200).json(livrosInclusos);
            break;

        default:
            res.status(405).send("Method Not Allowed");
            break;
    }
}
export const error = {
    onError: ( req: NextApiRequest, res: NextApiResponse, err:any) => {
      res.status(500).end(err.toString());
    }}
