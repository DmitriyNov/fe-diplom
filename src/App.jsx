import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {

  const navigation = useNavigate();

  useEffect(() => {
    navigation("main");   
  }, []);
  
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
