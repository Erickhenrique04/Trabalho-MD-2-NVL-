import  Editora from "../modelo/Editora";

var editoras: Array<Editora> =[
    {
        nomeEditora : "Abril",
        codEditora : 1
    },
    {
        nomeEditora : "Maga",
        codEditora : 2
    },
    {
        nomeEditora : "Cultura",
        codEditora : 3
    }
];

export default class ControleEditora {
    editoras = editoras;
    getNomeEditora(codigoEditora:number){
        let editora: Editora[]  = this.editoras.filter((editora:Editora)=>{
          return editora.codEditora === codigoEditora
        })
        return editora[0].nomeEditora;
      }; 
      
      getEditoras(){
        return this.editoras
      }
}
