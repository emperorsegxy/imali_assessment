import React from 'react';
import './App.scss';
import './assets/drawer.scss'
import './assets/app-bar.scss'
import {SideBar} from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import {Customers} from "./pages/Customers";
import AppNavBar from "./components/AppNavBar";
import * as routes from './routes'
import Overview from "./pages/Overview";
import Defaulters from "./pages/Defaulters";
import Fulfillments from "./pages/Fulfillments";
import CustomerProfile from "./pages/CustomerProfile";

function App() {
  return (
      <div>
          <AppNavBar username={'Alex'} vendorId={'3945823'} />
          <SideBar />
          <div className="dashboard--content">
              <Routes>
                  <Route path={routes.HOME} element={Overview()} />
                  <Route path={routes.CUSTOMERS} element={Customers()} />
                  <Route path={routes.DEFAULTERS} element={Defaulters()} />
                  <Route path={routes.FULFILLMENTS} element={Fulfillments()} />
                  <Route path={routes.PROFILE} element={CustomerProfile()} />
              </Routes>
          </div>
      </div>
  );
}

export default App;
