import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>Шишкин Александр</div>
          <div>О себе: fullstack-разработчик, опыт 15 лет, основной стек java + устаревший JS (backbone, jQuery и т.д.)</div>
          <div>Цель: актуализировать и углубить знания React, перейти на совремаенный стек frontend разработки</div>
        </p>
      </header>
    </div>
  );
}

export default App;
