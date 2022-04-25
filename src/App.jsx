import './App.css';
import NavBar from './components/NavBar/NavBar';
import Box from './components/Box/Box';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <Box />
      </body>
    </div>
  );
}

export default App;
