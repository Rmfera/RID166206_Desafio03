import styles from './AboutMe.module.css';
import Timeline3 from '../elements/Timeline3';
function AboutMe() {
    var timelineData = [
        { year: "2020", description: "Intelbras (+ 8 anos). Formado - Sistemas de Informação pela FAI - CENTRO DE ENSINO SUPERIOR." },
        { year: "2021", description: "Curso de Inglês Holiday Idiomas em Santa Rita do Sapucaí - MG. Também estudei no Duolingo." },
        { year: "2022", description: "Biotron Equipamentos Médicos - Programação de Microcontroladores PIC." },
        { year: "2023", description: "Estudando para Concursos Públicos de Nível Superior." },
        { year: "2024", description: "Cursando Full Stack na escola DNC (HTML, CSS e JScript)." },
        { year: "2025", description: "Cursando Full Stack na escola DNC (React, Vite e TypeScript)" }
    ];
    return (
        <div className={styles.AboutMe}>
            <h2 id='Sobre-mim'>Sobre mim</h2>
            <section>
                <Timeline3 items={timelineData} />
            </section>
        </div>
    )
}

export default AboutMe;