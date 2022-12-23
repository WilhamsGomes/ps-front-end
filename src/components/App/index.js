import "../../assets/styles/global.css";
import "./style.css";

import SelectContas from "../SelectContas";
import FormFiltros from "../FormFiltros";

function App() {
  return (
    <div className="App">
      <SelectContas/>
      <FormFiltros/>
    </div>
  );
}

export default App;
