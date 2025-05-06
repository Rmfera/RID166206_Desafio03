/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import ButtonA from './ButtonA';
import styles from './Card.module.css';

function Card({ img, title, description, site }) {

    return (
        <div className={styles.Card}>
            <section>
                <img src={img} alt='ERRO' />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={site} target="_blank"><ButtonA text='Clique aqui' /></a>
            </section>
        </div>
    );
}

export default Card;