import React, {useContext} from "react";
import styles from "./style.module.css"

import { ThemeContext } from "../Theme/useThemeContext"; 

export default function Button(props){

    const {theme} = useContext(ThemeContext);

    return (
        <>
            <button 
                onClick={props.onClick}
                className={styles.button}
                style={{
                    color: theme === 'dark' ? '#222222' : '#ECF1F3'
                }}
            >
                {props.children}
            </button>
        </>
    )
}