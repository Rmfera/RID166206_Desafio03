import github from '../../assets/github.svg';
import linkedIn from '../../assets/linkedIn.svg';
// import options from '../../assets/options.svg';

import styles from './Contacts.module.css';
function Contacts() {
    return (
        <div className={styles.Contacts}>
            <div>
                <h3>Meu contato: <br />XX AYYYYYYYY</h3>
                <h3>Email: <br />teste@teste.com.br</h3>
            </div>
            <ul>
                <li> <a href='https://github.com/Rmfera' target="_blank"><img src={github} alt="Github" /></a></li>
                <li><a href='https://www.linkedin.com/in/reinaldomferreira' target="_blank"><img src={linkedIn} alt="LinkedIn" /></a></li>
            </ul>
        </div>
    )
}

export default Contacts;