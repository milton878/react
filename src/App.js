

import './App.css';
//import NavBarExample from './components/NavBar/navbar';

import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import NavBarExample from './components/NavBar/navbar';




function App() {
  return (
    <>
    {<NavBarExample />}
    {<ItemListContainer texto='Caraball' />} 
    </>
    
  
   
  );
}

export default App;
