
import { BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import NavBarExample from './components/NavBar/navbar';
//importamos las secciones:
import Home from './components/NavBar/home';
import Partes from './components/NavBar/partes';
import Motos from './components/NavBar/motos';
import {ItemListContainer} from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExample/> }>
          <Route index element={ < Home /> } />
          <Route path='partes' element={ < Partes /> } />
          <Route path='motos' element={ < Motos /> } /> 
          <Route path='/' element={<ItemListContainer />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
