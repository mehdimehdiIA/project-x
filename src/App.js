import './App.css';
import Login from './Login/Login';
import Table from './Tbale/Table';
import Sidebar from './Sidebar/Sidebar';
import Navigate from './Nvigationbar/Navigate';
import Output from './Show-Output/Output';
import ContextAp from './Context/ContextAp';
import { createContext } from 'react';
import ApiTwo from './Context/ApiTwo';
import ApiThree from './Context/ApiThree';




function App() {

  return (
    <div>
      {/* <Table /> */}
      <Navigate />
      <Sidebar />

    </div>
  );
}

export default App;
