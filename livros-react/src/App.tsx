import { Link, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  document.title = 'Livros React'
  return (
    <div className="App"> 
      {/* <Link to={'dados'}>Dados</Link> */}
      <nav className="navbar navbar-dark bg-dark">
        <ul>
          <li className='nav-item'><Link to={'/lista'} className="navbar-brand">Catalogo</Link></li>
          <li className='nav-item'><Link to={'/dados'}className="navbar-brand">Novo</Link></li>
        </ul>
      </nav>
      <div><Outlet /></div>

    </div>
  );
}

export default App;
