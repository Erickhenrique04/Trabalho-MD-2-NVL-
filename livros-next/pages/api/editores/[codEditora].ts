import { NextApiRequest, NextApiResponse } from "next"
import { controleEditora } from "."

export default (req: NextApiRequest, res: NextApiResponse) => { 
    var cod = req.query.codEditora;
    var nome = controleEditora.getNomeEditora(Number(cod));
    
    
    res.status(200).json({nome});
    
}
export const error = {
    onError: ( req: NextApiRequest, res: NextApiResponse, err:any) => {
      res.status(500).end(err.toString());
    },
    onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
      res.status(405).send("Method Not Allowed");
    },
  };
