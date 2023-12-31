import React, { useEffect, useState } from "react";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros"

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
    return <tr>
        <td className="titulo"><h4>{props.livro.titulo}</h4><br />
            <button className="btn btn-danger" onClick={() => props.excluir(props.livro.codigo)}>Excluir</button>
        </td>
        <td className="resumo">{props.livro.resumo}</td>
        <td>{controleEditora.getNomeEditora(props.livro.codEditora)}</td>
        <td>
            <ul>
                {props.livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
            </ul>
        </td>
    </tr>
}



function LivroLista() {

    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(Boolean);


    useEffect(() => {
        setLivros(controleLivro.obterLivros())
        setCarregado(true)

    }, [carregado]);

    const excluir = (num) => {

        controleLivro.excluir(num);
        setCarregado(false);
    }


    return (
        <main>
            <h1>Controle de Livros</h1>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Titulo</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <LinhaLivro
                            livro={livro}
                            key={index}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    )

}
export default LivroLista;
