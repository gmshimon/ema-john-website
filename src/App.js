import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Router, Routes } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
