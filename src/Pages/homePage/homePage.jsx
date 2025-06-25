import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Card from '../../components/card/card';
import './homePage.css';
// implementar la API
import UserList from '../../components/UserList/UserList';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      
      <main className="homepage-content">
        <h1>Bienvenido a Mi Sitio</h1>
        <p>Explora nuestros servicios destacados</p>
        
        <div className="cards-container">
          <Card 
            title="Diseño Web"
            image="https://tse2.mm.bing.net/th?id=OIP.h6lj7H-QfzG_F2TyXicHqwHaD4&pid=Api&P=0&h=180"
            //image="https://via.placeholder.com/250x160"
            description="Creamos sitios web modernos y responsivos."
          />
          <Card 
            title="Desarrollo de Apps"
            image="https://tse2.mm.bing.net/th?id=OIP.FKNCCm-FeSwYUHi5yOeHxQHaEK&pid=Api&P=0&h=180"
            description="Aplicaciones móviles a medida para tu negocio."
          />
          <Card 
            title="Consultoría IT"
            image="https://tse1.mm.bing.net/th?id=OIP.CvQ0OxAXvngR0bQb1xdUGwHaE8&pid=Api&P=0&h=180"
            description="Asesoramiento experto en tecnología."
          />
        </div>
      </main>

      <UserList /> {/* Aca se muestran los datos de la API */}

      <Footer />
    </div>
  );
};

export default HomePage;