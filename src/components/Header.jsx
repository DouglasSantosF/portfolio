import React, { useContext } from 'react';
import estadoBackground from '../context';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import backTeste from '../images/background/homeImage.jpg';

const Header =() => {

  
  const { 
    backgroundImage,
    homePage,
    setHomePage,
    aboutPage,
    setAboutPage,
    projetoPage,
    setProjetoPage,
    jsPage,
    setJsPage,
    setBePage,
    fePage,
    setFePage } = useContext(estadoBackground);
  
    const COLOR = 'shadow';

      const setClass = (classPage) => {
  
        setHomePage('');
        setAboutPage('');
        setProjetoPage('');
        setJsPage('');
        setFePage('');
        setBePage('');

        if(classPage==='home') {
          setHomePage(COLOR);
        }
        if(classPage==='about') {
          setAboutPage(COLOR);
        }
        if(classPage==='javaScript') {
          setProjetoPage(COLOR);
          setJsPage(COLOR);
        }
        if(classPage==='Front-End') {
          setProjetoPage(COLOR);
          setFePage(COLOR);
        }
        if(classPage==='Back-End') {
          setProjetoPage(COLOR);
          setBePage(COLOR);
        }
        
      }; 

      
      
       document.body.style.backgroundImage = `url(${backgroundImage})`;
    return (
      <header className="header">
        <nav className='main-nav'>
          <ul className='ul-container'>
            <li id='hm' className={`${homePage}`}> <Link onClick={() => setClass('home')} to="/"> Home </Link></li>
            <li id='ab' className={`${aboutPage}`}> <Link onClick={() => setClass('about')} to='/about'> Sobre </Link></li>
            <li id='pr' className={` project ${projetoPage}`}> <Link> Projetos &#x25BC;</Link>
              <ul className='submenu'> 
                <li id='js' className={`${jsPage}`}> <Link to='javaScript' onClick={() => setClass('javaScript')}>JavaScript</Link></li>
                <li id='fe' className={`${fePage}`}> <Link to='front-end' onClick={() => setClass('Front-End')}>Front-End</Link></li>
                {/* <li id='be' className={`${bePage}`}> <Link to='back-end' onClick={() => setClass('Back-End')}>Back-End</Link></li> */}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    );

  
}

export default Header;