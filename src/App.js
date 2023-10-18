import { register } from 'swiper/element/bundle';
import logo from './imagens/logo.png';
import slide1 from './imagens/slide1.jpg';
import slide2 from "./imagens/slide2.jpg";
import slide3 from "./imagens/slide3.jpg";
import slide4 from "./imagens/slide4.jpg";
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

register();

function App() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  const slide = [slide1, slide2, slide3, slide4];
  return (
    <div className="App">
      <header className='navBar'>
        <div className={active ? "iconActive" : "icon"} onClick={ToggleMode}>
          <div className='menuPc'>
              <nav id='navBox'>
                <ul className='lista'>
                  <li><a href="https://betelpro.github.io/Procopio-s/" target="_blank">Início</a></li>
                  <li>Fazer Pedido</li>
                  <li>Feedback</li>
                  <li>Quem Somos?</li>
                </ul>
              </nav>
          </div>
          <div className='menu'>
            <i id="men1"></i>
            <i id="men2"></i>
            <i id="men3"></i>
          </div>
        </div>
        <div className='navLeft'>
          <h3>Procópios's Açaí</h3>
          <img src={logo} className='logo' alt='logo' />
        </div>
      </header>
      <main className='slide'>
        <Swiper 
          modules={[EffectCoverflow]}
          effect='coverflow'
          slidesPerView={1}
          pagination={{ clickable: true}}
          navigation>
          {slide.map(item => (
            <SwiperSlide key={item.id}>
              <img src={item} alt={slide} className='slideItem' />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <footer className='navBot'>
        <nav>
            <p id='copy'>© Copyright 2023 Procópio's Açaí - All Rights Reserved</p>
        </nav>
      </footer>
    </div>
  );
}

export default App;
