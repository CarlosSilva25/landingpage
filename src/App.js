import Header from './components/header'; 
import Home from './components/home.js';
import Produtos from './components/produtos';
import Footer from './components/footer.js';
import InputForm from './components/input';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Produtos/>
      <InputForm/>
      <Footer/>
    </div>
  );
}

export default App;
