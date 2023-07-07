import styles from './Menu.module.css'
import iconeMenu from './menu-icon.svg'
import imgUsuario from './img_user.svg'

function Menu() {
    return(
        <nav className= {styles.align}>
            <div className = {styles.menu}> 
                <h3>Gmail</h3>
                <h3>Imagens</h3>
                <img src={iconeMenu} alt='ERROR'/>
                <img src={imgUsuario} alt='ERROR'/>
            </div>
        </nav>
    )
}

export default Menu;