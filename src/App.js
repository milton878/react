
import { BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import NavBarExample from './components/NavBar/navbar';

import ItemListContainer from './components/ItemListContainer/itemlistcontainer';




function App() {
  return (
    
  
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<NavBarExample /> }></Route>
          <Route path='/' element={<ItemListContainer texto='Caraball' />}></Route>

          
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
