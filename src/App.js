import logo from './logo.svg';
import './App.css';
import  MyHome  from "./Component/MyHome/MyHome";
import Header from './Component/MyHome/Header/Header';
import Footer from './Component/MyHome/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyHome />   
        <Footer />   
      </header>
    </div>
  );
}

export default App;
