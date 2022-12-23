import styles from "./style.module.css";

export default function TableExtrato(props){
    return(
        <table className={styles.table}>
            {props.children}
        </table>
    )
}