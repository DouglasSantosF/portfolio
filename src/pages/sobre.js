import React, { useContext , useEffect} from 'react';
import estadoBackground from '../context/index';
import linkedinIcon from '../icon/linkedinIcon.svg';
import githubIcon from '../icon/github2Icon.svg';
import emailIcon from '../icon/emailIcon.svg';
import Ferramentas from '../components/Ferramentas';
import sobreBack from '../images/background/aboutImage3.jpg';



import '../css/sobre.css';

const Sobre = () => {
  
  const { setBackgroundImage, setAboutPage } = useContext(estadoBackground);

  useEffect(() => {
    setBackgroundImage(sobreBack);
    setAboutPage('shadow');
  }); 

  return (
    <div className='aboutContainer'>
      

        <div className='mainAbout'>
          <div className='about'>
            <p> Olá, me chamo Douglas.</p>
            <p> Atualmente sou estudante de Desenvolvimento web na trybe. </p>
            <p>
              Já concluí os módulos de fundamentos de JavaScript, Front-End e agora estou concluíndo o módulo de Back-End.</p>
            <p> No momento sei desenvolver projetos utilizando React junto com javaScript, e a cada dia aprimoro mais minhas habilidades.</p>
            <p> Também estou aprendendo sobre a Parte de Back-End. Utilizando a biblioteca Express junto com node.JS, aprendi a construir API's seguras através de requisições HTTP utilizando a arquiterura de Software MSC.</p>
            <p> Os Bancos de dados que sei trabalhar no momento são o MySQL e o MongoDB, e sei trabalhar utilizando a ferramenta ORM Sequelize para manipular as tabelas do MySQL.</p>
            <p> Estou próximo de terminar o curso e me tornar um desenvolvedor fullstack.</p>
          </div>
          <div className='contato'>
            <h3 className='titleContato'> Contato </h3>
              <div className='linkedin'>
                <a target="_blank" href='https://www.linkedin.com/in/douglassf/' rel="noreferrer">
                  <img src={linkedinIcon} alt='linkedinIcon'/>
                </a>
                <p>linkedin.com/in/douglassf/</p>
              </div>
              <div className='github'>
                <a target="_blank" href='https://github.com/DouglasSantosF' rel="noreferrer">
                  <img src={githubIcon} alt='linkedinIcon'/>
                </a>
                <p>github.com/DouglasSantosF</p>
              </div>
              <div className='email'>
                <img src={emailIcon} alt='email icone' />
                <p>doug.frutuoso@gmail.com</p>
              </div>
          </div>
        </div>
          <Ferramentas />
      
 

    </div>
  )

}

export default Sobre;