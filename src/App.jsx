import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() {

  const [searchData, setSearchData] = useState({});
  const [routesList, setRoutesList] = useState({});
  const [orderData, setOrderData] = useState({});

  const navigation = useNavigate();

  useEffect(() => {
    navigation("main");   
  }, []);
  
  return (
      <div className='app'>
        <Header />
        <Outlet context={[searchData, setSearchData, routesList, setRoutesList, orderData, setOrderData]}/>
        <Footer />
      </div>
  );
}
