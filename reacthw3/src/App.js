import logo from './logo.svg';
import './App.css';
import Productitem from './Productitem';
import Products from './Products';

function App() {
  return (
    <div className="App" style={{display:"flex",justifyContent:"left"}}>
      {/* <header className="App-header">
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
      </header> */}
      <Products></Products>
    </div>
  );
}

export default App;
