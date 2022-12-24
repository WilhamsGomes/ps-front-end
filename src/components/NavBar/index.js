import styles from "./style.module.css";
import { MdAccountCircle } from "react-icons/md";

export default function NavBar(){
    return(
        <header className={styles.header}>
            <ul className={styles.lista}>
                <li>Home</li>
                <li>Conta Digital</li>
                <li>Rendimentos</li>
                <li className={styles.active}>Extrato</li>
            </ul>
            <button>
                Login
                <MdAccountCircle/>
            </button>
        </header>
    )
}