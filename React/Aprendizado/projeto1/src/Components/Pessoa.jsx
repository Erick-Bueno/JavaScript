import styles from './Pessoa.module.css'
function Pessoa({nome, idade, imagem}){
    return(
        <div className="container1">
            <img src={imagem} alt="" />
            <h2 className={styles.container1}>nome: {nome}</h2>
            <h2>idade: {idade}</h2>
        </div>
    )
}
export default Pessoa