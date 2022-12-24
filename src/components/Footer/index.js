import styles from "./style.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer(){
    return(
        <footer className={styles.footer}>
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