import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss'

import Header from './components/Header';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
