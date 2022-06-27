import React, { Component } from 'react'
import gitIcon from '../icon/githubIcon.svg'
import explorerIcon from '../icon/explorerIcon.svg'
import '../css/ProjectCard.css'

export default class ProjectCard extends Component {
  render() {
    const { nome, repositorio, link, image, descricao } = this.props;

    return (
      <div className='cardContainer'>
        <img className='imageCard' src={image} alt={nome}/>
        <p className='nome'>{nome}</p>
        <p className='descricao'>{descricao}</p>

        <div className='links'>
          <a className='aCard' target="_blank" href={repositorio} rel="noreferrer">
         {/*  <i className='gitCard' class="devicon-github-original-wordmark"></i> */}
          <img className='Icon' src={gitIcon} alt='icone do git' />
          </a> 
       
          <a className='aCard' target="_blank" href={link} rel="noreferrer">
            {/* <i className='navegador' class="devicon-chrome-plain-wordmark"></i> */}
            <img className='Icon' src={explorerIcon} alt='icone do navegador' />
          </a>
        </div>
      </div>
    )
  }
}
