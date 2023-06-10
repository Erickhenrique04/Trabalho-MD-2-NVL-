import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros"

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();


function LivroDados(props) {
    let opcoes = controleEditora.getEditoras().map((item) => {
        return(
                <option value={item.codEditora} key={item.codEditora}>{item.nomeEditora}</option>
        )
    })

    const [titulo, setTitulo] = useState(String);
    const [resumo, setResumo] = useState(String);
    const [autores, setAutores] = useState(String);
    const [codEditora, setCodEditora] = useState (Number);

    const navigate = useNavigate();
    
    const tratarCombo= (evento) => {
        setCodEditora(parseInt(evento.target.value))
    }
    const incluir= (evento) =>{
        evento.preventDefault();
        var livro = ({
            codigo : 0,
            codEditora : codEditora,
            titulo : titulo,
            resumo : resumo,
            autores: autores.split('\n')
        })
        setTitulo('');
        setResumo('');
        setAutores('');

        controleLivro.incluir(livro);
        navigate('/lista')

    }

    return (
        <main>
            <form className="form-control" onSubmit={incluir}>
                <h1>Dados do Livro</h1>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" className="form-control" placeholder="" name="titulo" onChange={(evento)=>{setTitulo(evento.target.value)}} required />
                </div>
                <div className="form-group">
                    <label htmlFor="resumo">Resumo</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="resumo"onChange={(evento)=>{setResumo(evento.target.value)}} required=""></textarea>
                </div>
                
                <div className="form-group">
                    <label htmlFor="editora">Editora</label>
                    <select name="editora" className="form-control" id="exampleFormControlSelect1" onChange={tratarCombo} required>
                        <option></option>
                        {opcoes}
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="autores">Autores</label> 
                    <textarea name="autores" className="form-control" id="exampleFormControlTextarea1" rows="2"onChange={(evento)=>{setAutores(evento.target.value)}}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Salvar dados</button>
            </form>
        </main>
    )
}
export default LivroDados;
