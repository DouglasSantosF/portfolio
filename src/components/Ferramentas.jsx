import React from "react";
import bootstrap from '../icon/bootstrapIcon.svg';
import cIcon from '../icon/cIcon.svg';
import css from '../icon/cssIcon.svg';
import docker from '../icon/dockerIcon.svg';
import express from '../icon/expressIcon.svg';
import git from '../icon/gitIcon.svg';
import html from '../icon/htmlIcon.svg';
import javascript from '../icon/javascriptIcon.svg';
import jest from '../icon/jestIcon.svg';
import mongodb from '../icon/mongodbIcon.svg';
import mysql from '../icon/mysqlIcon.svg';
import node from '../icon/nodejsIcon.svg';
import react from '../icon/reactIcon.svg';
import sequelize from '../icon/sequelizeIcon.svg';
import typescript from '../icon/typescriptIcon.svg';
import redux from '../icon/reduxIcon.svg';
import slack from '../icon/slackIcon.svg'

import '../css/Ferramentas.css';

const Ferramentas = () => {

  return (
    <div className='ferramentas'>
        <h3 className='titleFerramentas'> Ferramentas </h3>
      <div className='skills1'>

        <div className='flexColumm'>
          <a target="_blank" href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' rel="noreferrer"> <img src={html} alt='html'/> </a>
          <p>html</p>
        </div>
        
        <div className='flexColumm'>
          <a target="_blank" href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' rel="noreferrer"><img src={css} alt='css'/></a>
          <p>CSS</p>
        </div>
       
        <div className='flexColumm'>
          <a target="_blank" href='https://getbootstrap.com/docs/4.1/getting-started/introduction/' rel="noreferrer"><img src={bootstrap} alt='bootstrap'/></a>
          <p>Bootstrap</p>
        </div>
       
        <div className='flexColumm'>
          <a target="_blank" href='https://devdocs.io/c/' rel="noreferrer"><img src={cIcon} alt='linguagem-c'/></a>
          <p>linguagem C</p>
        </div>
      
        <div className='flexColumm'>
          <a target="_blank" href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' rel="noreferrer"><img src={javascript} alt='Javascript'/></a>
          <p>JavaScript</p>
        </div>
      
        <div className='flexColumm'>
          <a target="_blank" href='https://www.typescriptlang.org/docs/' rel="noreferrer"><img src={typescript} alt='typescript'/></a>
          <p>Typescript</p>
        </div>
      
        <div className='flexColumm'>
          <a target="_blank" href='https://pt-br.reactjs.org/docs/getting-started.html' rel="noreferrer"><img src={react} alt='react'/></a>
          <p>React</p>
        </div>
       
        <div className='flexColumm'>
          <a target="_blank" href='https://redux.js.org/introduction/getting-started' rel="noreferrer"><img src={redux} alt='redux'/> </a>
          <p>Redux</p>
        </div>
      </div>

      <div className='skills2'>
      <div className='flexColumm'>
          <a target="_blank" href='https://git-scm.com/about' rel="noreferrer"><img src={git} alt='git'/></a>
          <p>git</p>
        </div>
        <div className='flexColumm'>
          <a target="_blank" href='https://jestjs.io/pt-BR/' rel="noreferrer"><img src={jest} alt='jest'/></a>
          <p>Jest</p>
        </div>
        <div className='flexColumm'>
          <a target="_blank" href='https://dev.mysql.com/doc/' rel="noreferrer"><img src={mysql} alt='mysql'/></a>
          <p>MySQL</p>
        </div>
        <div className='flexColumm'>
          <a target="_blank" href='https://www.mongodb.com/docs/' rel="noreferrer"><img src={mongodb} alt='mongodb'/></a>
          <p>MongoDB</p>
        </div>
        <div className='flexColumm'>
          <a target="_blank" href='https://sequelize.org/' rel="noreferrer"><img src={sequelize} alt='sequelize'/></a>
          <p>Sequelize</p>
        </div>
        <div className='flexColumm'>
          <a target="_blank" href='https://nodejs.org/en/docs/' rel="noreferrer"><img src={node} alt='nodejs'/></a>
          <p>NodeJS</p>
        </div>
        <div className='flexColumm'>
          <a target="_blank" href='https://expressjs.com/en/5x/api.html' rel="noreferrer"><img src={express} alt='express'/></a>
          <p>Express</p>
        </div>
        <div className='flexColumm'>
          <a target="_blank" href='https://docs.docker.com/get-started/overview/' rel="noreferrer"><img src={docker} alt='docker'/></a>
          <p>Docker</p>
        </div>
       <div className='flexColumm'>
          <a target="_blank" href='https://slack.com/intl/pt-br/resources' rel="noreferrer"><img src={slack} alt='slack'/></a>
          <p>Slack</p>
        </div> 
      </div>
    </div>
  );
}

export default Ferramentas;