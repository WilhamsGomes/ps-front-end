import React, {useContext} from "react";
import styles from "./style.module.css";

import { MdAccountCircle } from "react-icons/md";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

import { ThemeContext } from "../Theme/useThemeContext";

export default function NavBar(){

    const {theme, onToggleTheme} = useContext(ThemeContext);

    return(
        <header 
            className=
            {[
                styles.header, 
                theme === 'light' ? styles.light : styles.dark
            ].join(' ') }          
        >
            <ul className={styles.lista}>
                <li>Home</li>
                <li>Conta Digital</li>
                <li>Rendimentos</li>
                <li>Extrato</li>
            </ul>
            <div className={styles.buttonsHeader}>
                <button 
                    className={[
                        styles.buttonNav,
                        theme === 'light' ? styles.buttonNavLight : styles.buttonNavDark
                    ].join(' ')}
                >
                    Login
                    <MdAccountCircle/> 
                </button>
                <button 
                    onClick={onToggleTheme}
                    className={[
                        styles.buttonTheme,
                        theme === 'light' ? styles.buttonNavLight : styles.buttonNavDark].join(' ')}
                >
                    {theme === 'light' 
                    ? <BsFillMoonFill color="#F35E26"/>
                    : <BsMoon color="#F35E26"/>}
                </button>
            </div>
        </header>
    )
}