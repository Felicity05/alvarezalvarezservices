import './App.css';
import {Gallery} from "./Pages/Gallery";
import {About} from "./Pages/About";
import {Services} from "./Pages/Services";
import {Contact} from "./Pages/Contact";
import {Home} from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
