import React, { useContext , useEffect} from 'react';
import estadoBackground from '../context/index';
import beBack from '../images/background/beBackground.png';

const ProjetosBack = () => {
  
  const { setBackgroundImage, setBePage, setProjetoPage } = useContext(estadoBackground);

  useEffect(() => {
    setBackgroundImage(beBack);
    setProjetoPage('shadow');
    setBePage('shadow');
  }); 


    return (
      <div>projetosBack</div>
    )
  }

export default ProjetosBack;
