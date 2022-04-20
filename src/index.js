import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss'
import './index.scss';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App/>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
