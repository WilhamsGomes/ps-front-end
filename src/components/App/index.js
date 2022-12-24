import React, {useContext} from "react";
import "../../assets/styles/global.css";
import styles from "./style.module.css";

import FormFiltros from "../FormFiltros";
import Footer from "../Footer";
import NavBar from "../NavBar";

import { ThemeContext } from "../Theme/useThemeContext"; 

function App() {

  const {theme} = useContext(ThemeContext);

  return (
      <div className={styles.App}  
        style={{
          background: theme === 'dark' ? '#222222' : '#ECF1F3'
        }}
      > 
          <NavBar/>
          <FormFiltros/>
          <Footer/>
      </div>
  );
}

export default App;
