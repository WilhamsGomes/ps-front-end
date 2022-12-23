import styles from "./style.module.css";

export default function InputForm(props){
    return(
        <div className={styles.groupInput}>
            <label>{props.label}</label>
            <input 
                className={styles.input}
                type={props.type}
                placeholder={props.placeholder}
            >
            </input>
        </div>
    )
}