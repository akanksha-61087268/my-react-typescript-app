import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FirstComponent from './custom-component/FirstComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to React App</p> 
        <p> Imported custom Component:  <FirstComponent/></p>
      </header>
    </div>
  );
}

export default App;
