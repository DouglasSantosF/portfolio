import pixelImage from '../images/jsImages/pixels-art.png';
import toDoListImage from '../images/jsImages/toDoList.png';
import trybewartsImage from '../images/jsImages/trybewarts.png';
import shoppinKartImage from '../images/jsImages/shopping-kart.png'

const projetosJS = [
{
  id:1,
  nome:'Pixels Art',
  repositorio:'https://github.com/DouglasSantosF/project-pixels-art',
  link:'https://douglassantosf.github.io/project-pixels-art/',
  image: pixelImage,
  descricao:'A partir de 4 cores aleatórias, é possível desenhar numa tela pixelada, também é possível alterar o tamanho da tela'
},
{
  id:2,
  nome:'To do List',
  repositorio:'https://github.com/DouglasSantosF/project-todo-list',
  link:'https://douglassantosf.github.io/project-todo-list/',
  image:toDoListImage,
  descricao:'Nesse projeto, podemos montar uma lista de tarefas, ir marcando as que foram feitas e apagar os itens.'
},
{
  id:3,
  nome:'TrybeWarts',
  repositorio:'https://github.com/DouglasSantosF/project-trybeWarts',
  link:'https://douglassantosf.github.io/project-trybeWarts/',
  image: trybewartsImage,
  descricao:'Simulando um formulário, podemos preencher as respostas, e tem uma simulação de verificação de login'
},
{
  id:4,
  nome:'Shopping Kart',
  repositorio:'https://github.com/DouglasSantosF/shopping-kart',
  link: 'https://douglassantosf.github.io/shopping-kart/',
  image: shoppinKartImage,
  descricao:'Simulando uma loja virtual, podemos adicionar itens ao carrinho e conferir o preço total dos produtos'
}

];

export default projetosJS;