
import { BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import NavBarExample from './components/navbar';
//importamos las secciones:
import Home from './components/home';
import Partes from './components/partes';
import Motos from './components/motos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarExample/> }>
        <Route index element={ < Home /> } />
        <Route path='partes' element={ < Partes /> } />
        <Route path='motos' element={ < Motos /> } /> 


        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
