import Card from '../elements/Card';
import styles from './Projects.module.css';
import projLandPage from '../../assets/ProjetoLandingPage.png'
import desafioLandPage from '../../assets/DesafioLandingPage.png'
import portfolioHtmlCss from '../../assets/PortfolioHtmlCssPuro.png'
import bootcampDnc from '../../assets/BootcampDNC.png'
import dncWheather from '../../assets/DncWheather.png'
import dncArqReinaldo from '../../assets/dnc-arq-reinaldo.png'
import salesDashboard from '../../assets/dnc-sales-dashboard-rmf.png'

function Projects() {
    return (
        <div className={styles.Projects}>
            <h2 id='Projetos'>Projetos</h2>
            <div>
                <Card
                    img={projLandPage}
                    title="Projeto Landing Page"
                    description="É uma página, ou melhor, uma Landing Page que mostra detalhes sobre o curso da DNC como: 
                    vídeo incorporado, depoimentos de alunos, formulário para captura de dados
                     como: email e um botão submit que envia o formulário e permite o download da ementa do curso."
                    site='https://github.com/Rmfera/projeto-landing-page'
                />
                <Card
                    img={desafioLandPage}
                    title="Desafio Landing Page"
                    description="Semelhante ao Projeto Landing Page, porém este foi feito sem o apoio do professor,
                    ou seja, o aluno precisa aplicar o que aprendeu, precisa fazer algumas pesquisas para construir 
                    a Landing Page e desta forma ele tem a percepção do quão desafiador é desenvolver uma página web."
                    site='https://github.com/Rmfera/Desafio1-Landing-Page'
                />

                <Card
                    img={portfolioHtmlCss}
                    title="Portfólio"
                    description="Desenvolvimento de um portfólio usando apenas HTML e CSS puro. O portfólio ficou com uma 
                    qualidade muito boa, já que o CSS nos permite entre outras coisas dar cor, utilizar o cursor pointer 
                    que informa ao usuário que ele pode ou deve clicar em um determinado link ou botão."
                    site='https://github.com/Rmfera/portfolio'
                />
                <Card
                    img={bootcampDnc}
                    title="Bootcamp DNC"
                    description="Neste projeto tivemos bastante contato com campos de entrada de dados, que chamamos em 
                    programação como inputs que são usados como muita frequência no Front-End da aplicação. 
                    Também aprendemos e usamos muito display flexbox e display grid para organizar as divisões da página.
                    "
                    site='https://github.com/Rmfera/Rmfera-bootcamp-dnc'
                />
                <Card
                    img={dncWheather}
                    title="DNC Wheather"
                    description="Neste projeto tivemos o primeiro contato com  as APIs do Viacep que retorna o cep e da 
                    Open-meteo que retorna entre outras informações a temperatura atual com base na latitude e longitude
                    que você digita nos campos destinados a isso no site em questão. Além do HTML, CSS também foi utilizado
                    o JavaScript."
                    site='https://github.com/Rmfera/reidncweather'
                />

                <Card
                    img={dncArqReinaldo}
                    title="DNC Arq Reinaldo"
                    description="Este já é um dos projetos mais complexos e que faz uso de React, Vite, consumo de API, 
                    utilização de react-router-dom que permite criar rotas para cada uma das páginas que compõem o site. 
                    Utilizamos o github e finalmente o deploy do site na Vercel. Site bilingue(EN, PT-BR)"
                    site='https://github.com/Rmfera/dnc-arq-reinaldo'
                />

                <Card
                    img={salesDashboard}
                    title="Sales Dashboard"
                    description="Assim como o projeto Bootcamp DNC que já foi citado, este projeto teve nível superior de 
                    dificuldade em partes como cadastro de usuário, login, logout e com as rotas protegidas. 
                    Foi utilizado React com TypeScript que faz uso de tipagem de dados."
                    site='https://github.com/Rmfera/dnc-sales-dashboard-rmf'
                />
            </div>

        </div>
    )
}

export default Projects;