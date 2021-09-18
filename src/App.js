import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {useEffect} from 'react';
import Searchbar from './Components/Search';
import Logs from './Components/logs';
import AddBtn from './Components/addBtn';
import AddLog from './Components/AddLog';
import EditLog from './Components/editLogModal';
import AddTechModal from './Components/techs/addTechModal';
import TechList from './Components/techs/techList';
import {Provider} from 'react-redux';
import store from './store';

function App() {

  useEffect(() => {
    M.AutoInit();
  })
  return (
    <Provider store={store}>
    <Searchbar />
    <div className="container">
      <Logs />
      <AddBtn />
    </div>
    <AddLog />
    <EditLog />
    <AddTechModal />
    <TechList />
    </Provider>
  );
}

export default App;
