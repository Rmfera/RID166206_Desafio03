import styles from './Navbar.module.css';
import github from '../../assets/github.svg';
import linkedIn from '../../assets/linkedIn.svg';


function Navbar() {
    return (
        <div className={styles.Navbar}>
            <ul>
                <li><a href="#Projetos">Projetos</a> </li>
                <li><a href='https://github.com/Rmfera' target="_blank">Tecnologias</a></li>
                <li><a href="#Sobre-mim">Sobre mim</a></li>
            </ul>
            <ul>

                <li> <a href='https://github.com/Rmfera' target="_blank"><img src={github} alt="Link do Github" /></a></li>
                <li><a href='https://www.linkedin.com/in/reinaldomferreira' target="_blank"><img src={linkedIn} alt="Link do LinkedIn" /></a></li>
            </ul>
        </div>
    )
}

export default Navbar;