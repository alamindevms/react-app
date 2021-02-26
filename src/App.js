import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Welcome from './component/Main/Welcome';



function App() {
  return (
    <div className="App">

      {/* Header-Start */}
      <Header></Header>
      {/* Header-End */}

      {/* Main-Start */}
      <Welcome></Welcome>
      {/* Main-End */}

      {/* Footer-Start */}
      <Footer></Footer>
      {/* Footer-End */}
      
    </div>
  );
}

export default App;
