import logoGoogle from "./logo-google.svg" 
import lupaIcone from "./icon-lupa.svg" 
import tecladoIcone from "./icon-teclado.svg" 
import audioIcone from "./icon-audio.svg" 
import privacidadeIcone from "./icon-privacidade.svg" 
import styles from './Content.module.css'

function Content(){
    return(
        <section className={styles.content}>
            <img src={logoGoogle} alt="ERROR" />

            <div className={styles.center}>
                <img className={styles.icone} src={lupaIcone} alt="ERROR" />
                <input placeholder="Pesquisar..."/>
                <img className={styles.icone} src={tecladoIcone} alt="ERROR" />
                <img className={styles.icone} src={audioIcone} alt="ERROR" />
                
            </div>

            <div className={styles.botoes}>
                <button className={styles.botao}> Pesquisa google </button>
                <button className={styles.botao}> Estou com sorte </button>
            </div>

            <div className={styles.privacidade}>
                <img src={privacidadeIcone} alt='ERROR'/>
                <h2>Faça o Check-up de privacidade</h2>
            </div>
        </section>
    )
}

export default Content;