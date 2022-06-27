import estadoBackground from ".";
import { useState } from "react";
import PropTypes from 'prop-types';





const Provider = ({children}) => {


  const [backgroundImage, setBackgroundImage] = useState('../images/background/feBackground.png');
  const [homePage, setHomePage] = useState('home');
  const [aboutPage, setAboutPage] = useState('home');
  const [projetoPage, setProjetoPage] = useState('home');
  const [jsPage, setJsPage] = useState('home');
  const [fePage, setFePage] = useState('home');
  const [bePage, setBePage] = useState('home');
  

  
  const contextValues = {
    backgroundImage,
    setBackgroundImage,
    homePage,
    setHomePage,
    aboutPage,
    setAboutPage,
    projetoPage,
    setProjetoPage,
    jsPage,
    setJsPage,
    bePage,
    setBePage,
    fePage,
    setFePage
  }
  
  return(
    <estadoBackground.Provider value={ contextValues }>
      {children}
    </estadoBackground.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;