import styles from './Sidebar.module.css'

function Siderbar(){
    return (
        <section className={styles.sidebar}>
            <div className={styles.contentSidebar}>
                <a href=""> Sobre </a>
                <a href=""> Publicidade </a>
                <a href=""> Negócios </a>
                <a href=""> Como funciona a Pesquisa </a>
            </div>

            <div className={styles.contentSidebar}>
                <a href=""> Privacidade </a>
                <a href=""> Termos </a>
                <a href=""> Configurações </a>
            </div>
            
        </section>
    )
}

export default Siderbar;