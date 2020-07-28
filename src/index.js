import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

const Page404 = () => (<div>Page 404 - not found</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} />

    </Switch>
    
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  document.getElementById('root')
);

