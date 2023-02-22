import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
