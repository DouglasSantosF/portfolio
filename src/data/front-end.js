import receitasImage from '../images/frontImages/receitas.png';
import walletImage from '../images/frontImages/wallet.png';
import triviaImage from '../images/frontImages/trivia.png';
import starWarsImage from '../images/frontImages/starWars.png';
import onlineStoreImage from '../images/frontImages/online-store.png';
import movieCardImage from '../images/frontImages/movie-card.png';

const frontEnd = [
  {
    id:1,
    nome:'Recipes Hunter',
    repositorio:'https://github.com/DouglasSantosF/app-de-receitas',
    link: 'https://app-de-receitas-vercel.vercel.app/',
    image: receitasImage,
    descricao:'Um app de receitas onde é possível fazer diversas pesquisas, disponível apenas na resolução mobile.'
  },

  {
    id:2,
    nome:'Wallet',
    repositorio:'https://github.com/DouglasSantosF/Projeto-Wallet',
    link:'https://project-wallet-sand.vercel.app/',
    image: walletImage,
    descricao:'um sistema onde é possível adicionar seus gastos em diversas moedas, é necessário um email válido e uma senha com tamanho maior que 7.'
  },


  {
    id:3,
    nome:'Trivia',
    repositorio:'https://github.com/DouglasSantosF/jogo-trivia',
    link:'https://trivia-vercel.vercel.app/',
    image:triviaImage,
    descricao:'Um jogo de perguntas, onde sua pontuação fica salva e tem configuração.'
  },
  {
    id:4,
    nome:'StarWars Planets Search',
    repositorio:'https://github.com/DouglasSantosF/project-search-planet-star-wars',
    link: 'https://project-search-planet-star-wars.vercel.app/',
    image:starWarsImage,
    descricao:'Uma aplicação para pesquisar e filtrar os planetas do universo de Star Wars.'
  },
  {
    id:5,
    nome:'Online Store',
    repositorio:'https://github.com/DouglasSantosF/online-store',
    link:'https://online-store-ml.vercel.app/',
    image:onlineStoreImage,
    descricao:'através da api do mercado livre, simulamos um site de compra de diversos iténs.'
  },
  {
    id:6,
    nome:'Movie Card',
    repositorio:'https://github.com/DouglasSantosF/movie-cards',
    link:'https://vercel-movie-card.vercel.app/',
    image:movieCardImage,
    descricao:'uma aplicação onde é possível adicionar filmes, editar e excluir, está responsível pra celular.'
  }
  ];
  
  export default frontEnd;