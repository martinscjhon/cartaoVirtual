import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './global/app';
import background from './assets/backnew.png';
import App from './app';


ReactDOM.render(
  <React.StrictMode>
    <Container imageFile={background}>
      <App />    
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
