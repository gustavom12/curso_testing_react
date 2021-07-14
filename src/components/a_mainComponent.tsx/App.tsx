import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sideBar/Sidebar';
import './App.sass';
function App() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="App">
      <Navbar toggleSideBar={setSideBar}/>
      <div className="d-flex">
        <Sidebar sideBar={sideBar} setSideBar={setSideBar}/>
      </div>
    </div>
  );
}

export default App;
