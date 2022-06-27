import React, { useContext , useEffect} from 'react';
import estadoBackground from '../context/index';
import ProjectCard from '../components/ProjectCard'
import '../css/projetoJS.css'
import projetoJSData from '../data/javaScript';
import jsBack from '../images/background/jsBackground.png';

const ProjetosJS = () => {
  
  const { setBackgroundImage, setJsPage, setProjetoPage } = useContext(estadoBackground);

  useEffect(() => {
    setBackgroundImage(jsBack);
    setProjetoPage('shadow');
    setJsPage('shadow');
  }); 

const mapProjectJS = () => {

  const cards = projetoJSData.map((projeto, ind) => 
    <ProjectCard
      key={ind}
      nome={projeto.nome}
      repositorio={projeto.repositorio}
      link={projeto.link}
      image={projeto.image}
      descricao={projeto.descricao}/>
    );

    return cards;
  }

    return (
      <div>
        <div className='jsContainer'>
          {mapProjectJS()}
        </div>
      </div>
    );
}

export default ProjetosJS;
