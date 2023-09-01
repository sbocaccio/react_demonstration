import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chupame la ponga <code>src/App.js</code> and save to reload.
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

const Banner = () => {
  return (
      <div className="bg-blue-700 text-white py-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-2">Special Offer!</h2>
          <p className="text-lg mb-4">Get 20% off on all products this week.</p>
            <button className="bg-white text-blue-700 py-2 px-4 rounded">Shop Now</button>
        </div>
      </div>
  );
};


export default App;
