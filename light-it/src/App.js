import logo from './logo.svg';
import './App.css';
import myImage from './images/logo.jpeg';

function App() {
  return (
    <div className="App">
      <TopBar/>
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

const TopBar = () => {
    return (
        <div className="bg-gray-800 text-white py-2">
            <div className="container mx-auto py-2 flex justify-between items-center">
                <img src={myImage} alt="My Image" className="max-w-xs h-auto" />

                <nav>
                    <ul className="space-x-4">
                        <li className="inline-block"><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li className="inline-block"><a href="#" className="hover:text-gray-300">About</a></li>
                        <li className="inline-block"><a href="#" className="hover:text-gray-300">Services</a></li>
                        <li className="inline-block"><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export default App;
