/* eslint-disable react/no-unknown-property */
import styles from './Presentation.module.css';
function Presentation() {
    return (
        <div className={styles.Presentation}>
            <h2>Minha Apresentação</h2>
            <marquee direction="left" scrollamount="10">
                <p> Sou Reinaldo Marques Ferreira
                    Bacharel em Sistemas de Informação pela FAI -
                    Centro de Ensino Superior.
                    Atualmente, estou me especializando como
                    Desenvolvedor Full Stack pela escola DNC,
                    com foco inicial em tecnologias de Front-End,
                    como HTML, CSS, JavaScript, TypeScript,
                    React e Vite. Também sou formado como Técnico
                    em Telecomunicações pela Escola Técnica de Eletrônica
                    ETE FMC. Tenho grande interesse na área de
                    desenvolvimento de software, buscando
                    sempre aplicar boas práticas de codificação,
                    criar interfaces modernas e responsivas,
                    e evoluir constantemente como profissional
                    na área de tecnologia.
                </p>
            </marquee>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
            <a href='https://www.linkedin.com/in/reinaldomferreira' target="__blank"><button>Saber mais </button></a>
        </div>
    )
}

export default Presentation;