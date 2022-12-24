import "../../assets/styles/global.css";
import "./style.css";

import FormFiltros from "../FormFiltros";
import Footer from "../Footer";
import NavBar from "../NavBar";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <FormFiltros/>
          <Footer/>
      </div>
  );
}

export default App;
