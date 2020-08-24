import React from 'react';
import './App.css';

const App = () => {
  return (
      <div>
        <Header/>
        <Technologies/>
      </div>
  );
};

const Header = () => {
  return (
      <div>
        <a href="#s">Home</a>
        <a href="#s">News feed</a>
        <a href="#s">Messages</a>
  </div>
)
};
const Technologies = () => {
  return (
      <div>
    <div>One div</div>
    <div className="App">
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>

    </div>
  </div>
)
};



export default App;
