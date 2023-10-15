import logo from './imagens/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='navBar'>
        <div className='menuPc'>
          <ul className='lista'>
            <li>Home</li>
            <li>Fazer Pedido</li>
            <li>Quem Somos</li>
          </ul>
        </div>
        <div className='menu'>
          <i id="men1"></i>
          <i id="men2"></i>
          <i id="men3"></i>
        </div>
        <div className='navLeft'>
          <h3>Procópios's Açaí</h3>
          <img src={logo} className='logo' alt='logo' />
        </div>
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
