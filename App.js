import React from 'react';
import Students from "./components/StudentList";
import './App.css'; 

import MRULogo2 from './components/MRULogo2.jpg'; 

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#696969' }}>
      <div className="container-fluid" >
      <img src={MRULogo2} alt="MRU Logo" style={{ filter: 'brightness(150%) contrast(120%)' }} />

        <h3 className="text-center mt-3" style={{ backgroundColor: '' }}><b style={{ color: 'orange' }}>Faculty List</b></h3>
        <Students />
      </div>
      </div>
    
  );
}

export default App;

