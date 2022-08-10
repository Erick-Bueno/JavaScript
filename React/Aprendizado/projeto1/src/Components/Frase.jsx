import styles from './frase.module.css'
function Frase(props){
    return(
        <div>
            <p className={styles.fraseContent}>a frase é : {props.frase}</p>
        </div>
    )
}

export default Frase