import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Cpaisaje1 from './components/Cpaisaje1';
import Cpaisaje2 from './components/Cpaisaje2';
import Cpaisaje3 from './components/Cpaisaje3';
import Cpaisaje4 from './components/Cpaisaje4';
import Cpaisaje5 from './components/Cpaisaje5';
import Cpaisaje6 from './components/Cpaisaje6';
import Cpaisaje7 from './components/Cpaisaje7';
import Cpaisaje8 from './components/Cpaisaje8';
import Cpaisaje9 from './components/Cpaisaje9';

import Navigation from './components/Navegation';
import './App.css'; // Asegúrate de que este archivo existe y está en el directorio src

function App() {
  return (
    <div>
      <Navigation />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="6"
                  aria-label="Slide 7"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="7"
                  aria-label="Slide 8"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="8"
                  aria-label="Slide 9"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="image-container">
                    <Cpaisaje1 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje2 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje3 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje4 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje5 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje6 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje7 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje8 />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="image-container">
                    <Cpaisaje9 />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
