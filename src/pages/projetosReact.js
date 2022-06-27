import React, { useContext, useEffect } from 'react'
import estadoBackground from '../context/index';
import ProjectCard from '../components/ProjectCard'
import '../css/projetosReact.css'
import projetoFront from '../data/front-end'
import feBack from '../images/background/feBackground.png';

const ProjetosReact = () => {

    
  const { setBackgroundImage, setProjetoPage, setFePage } = useContext(estadoBackground);

  useEffect(() => {
    setBackgroundImage(feBack);
    setProjetoPage('shadow');
    setFePage('shadow');
  }); 

 const mapProjectFront = () => {

    const cards = projetoFront.map((projeto, ind) => 
      <ProjectCard
        className="frontCard"
        key={ind}
        nome={projeto.nome}
        repositorio={projeto.repositorio}
        link={projeto.link}
        image={projeto.image}
        descricao={projeto.descricao}/>
    );

    return cards;
  };

  
    return (
       <div className='frontContainer'>
        {mapProjectFront()}
      </div>
    )
  
};

export default ProjetosReact;
