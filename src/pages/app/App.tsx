import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sideBar/Sidebar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.sass';
import Introduction from '../Introduction/Introduction';
import Structure from '../Structure/Structure';
import Queries from '../queries/Queries';
function App() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggleSideBar={setSideBar} />
        <div className="d-flex">
          <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
          <main className="">
            <Switch>
              <Route path="/structure/:section?" component={Structure} />
              <Route path="/introduction/:section?" component={Introduction} />
              <Route path="/queries/:section?" component={Queries} />
              <Redirect from="*" to="/introduction" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
