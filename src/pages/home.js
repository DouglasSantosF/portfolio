import React, { useContext , useEffect} from 'react';
import estadoBackground from '../context/index';
import fotoHome from '../fotosPage/fotoHome.jpg';
import backHome from '../images/background/homeImage.jpg';


import '../css/home.css'

const Home = ()=> {
  
  const {  setHomePage, setBackgroundImage } = useContext(estadoBackground);

  useEffect(() => {
    setBackgroundImage(backHome);
    setHomePage('shadow');
  }); 

  return (
    <div className='homeContainer'>
      <main className='mainHome'>
        <p>
          Minha jornada começa ao terminar o ensino médio. Eu não sabia exatamente o que gostaria de fazer, quais eram minhas habilidades,
          o meu propósito, mas sabia que era alguma coisa ligada ao mundo da tecnologia, algo que sempre tive bastante gosto.
        </p>
        <p>
          Foi quando eu passei para o curso de Ciências da computação da UFRJ, lá tive meu primeiro contato com a programação, através da linguagem C, aprendi o que eram variáveis e algoritmos, coisas que hoje em dia estão no meu sangue.
        </p>
        <p>
          Na faculdade eu tive a oportunidade de atuar como bolsista, trabalhando como suporte de TI, onde tive minha primeira experiência com clientes e usuários. Aprendi a lidar com os usuários, entender o lado deles e a saber ouvir seus pedidos e reclamações, coisas que levarei pra minha vida.
        </p>  
          <p>
          Embora eu tenha aprendido bastante na faculdade, eu ainda não tinha achado meu propósito, estava me sentindo perdido, e acabei trancando a faculdade. Foi quando ouvi falar sobre a Trybe, um curso focado em desenvolvimento web, Eu sabia que precisava tentar algo na área de tecnologia então resolvi entrar no curso.
          </p>
          <p>
          Foi quando pude explorar meus conhecimentos e a aprender novas tecnologias, hoje vejo que minha jornada fez sentido, descobri minha paixão na programação, cada dia aprendo um pouco mais, e descobri meu propósito, que é poder criar soluções para ajudar as pessoas.
          </p>
        <p>
          Minha história ainda está sendo escrita, mas fico feliz em ter dividido um pouco dela com você.
        </p>  
        <p>
          Aqui você encontrará alguns projetos que desenvolvi durante a minha jornada.
        </p>

      </main>
      <aside className='myImage'>
        <img src={fotoHome} alt='foto do Douglas'/>
      </aside>
    </div>
  )
}

export default Home;

