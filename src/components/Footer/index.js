import React, {useContext} from "react";
import styles from "./style.module.css";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { ThemeContext } from "../Theme/useThemeContext";

export default function Footer(){

    const {theme} = useContext(ThemeContext);

    return(
        <footer 
            className=
                {[
                    styles.footer,
                    theme === 'light' ? styles.light : styles.dark
                ].join(' ')}
            >
            <p>Se tiver dúvidas, entre em contato com a gente hora que quise</p>
            <div className={styles.contact}>
                <MdEmail/>
                <span>Email</span>
                <p>meajude@bank.com</p>
            </div>
            <div className={styles.contact}>
                <FaPhoneAlt/>
                <span>Telefone</span>
                <p>0800 0000 0000</p>
            </div>
        </footer>
    )
}