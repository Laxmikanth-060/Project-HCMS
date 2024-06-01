import './App.css';
import Header from './Components/Header';
import { Outlet } from "react-router-dom"
import NavBar from './Components/NavBar';
import {Provider} from 'react-redux'
import appStore from './appStore';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
     <Provider store={appStore}>
      <Header/>
     
      <NavBar/>
      <Outlet/>
     
      </Provider>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
