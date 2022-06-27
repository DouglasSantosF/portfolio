import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route }  from 'react-router-dom';
import home from './pages/home';
import sobre from './pages/sobre';
import projetosJS from './pages/projetosJS.js';
import projetosReact from './pages/projetosReact';
import projetosBack from './pages/projetosBack';
import Provider from './context/Provider';
import Footer from './components/Footer';


function App() {

  return (
    <div>
    <Provider>
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={home}></Route>
        <Route path="/about" component={sobre}></Route>
       <Route path="/javaScript" component={projetosJS}></Route>
        <Route path="/front-end" component={projetosReact}></Route>
        <Route path="/back-end" component={projetosBack}></Route>
        <Footer />
      </BrowserRouter>
    </Provider>
  </div>
  );
}

export default App;
