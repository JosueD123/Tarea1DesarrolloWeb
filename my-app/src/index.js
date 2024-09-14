import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap aquí
import reportWebVitals from './reportWebVitals';
import { Carousel, Card, Container, Navbar, Nav, Footer } from 'react-bootstrap';

function Index() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Carousel>
    {/* Primer elemento del carrusel */}
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://www.galileo.edu/fisicc/files/2020/06/preview_video_fisicc-compressor.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>Bienvenido a nuestro sitio web</h3>
            <p>Explora nuestros cursos finalizados.</p>
        </Carousel.Caption>
    </Carousel.Item>

    {/* Segundo elemento del carrusel */}
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://isil.pe/wp-content/uploads/2017/08/sistemas-de-informacion.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
            <h3>Descubre nuestros cursos de ingenieria en sistemas</h3>
            <p>Profundiza en el mundo de la programación avanzada.</p>
        </Carousel.Caption>
    </Carousel.Item>

    {/* Tercer elemento del carrusel */}
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://www.galileo.edu/fisicc/files/2020/06/Ingenieria_en_sistemas_header.jpg"
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Aprende con nosotros</h3>
            <p>Conoce nuestras opciones de aprendizaje y certificación.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>

            

            <Container className="mt-4">
                <h2>Cursos Disponibles</h2>
                <div className="d-flex flex-wrap">
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Body>
                            <Card.Title>Curso 1: Compiladores</Card.Title>
                            <Card.Text>
                            Un compilador es un programa que permite traducir el codigo fuente de un programa en lenguaje de alto nivel, a otro lenguaje de nivel inferior (tipicamente lenguaje de maquinas).
                            </Card.Text>
                            <Card.Link href="/curso1">Más información</Card.Link>
                        </Card.Body>
                    </Card>
                    {/* Agregar más tarjetas de curso aquí */}
                </div>
                <div className="d-flex flex-wrap">
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Body>
                            <Card.Title>Curso 2: Bases de datos</Card.Title>
                            <Card.Text>
                            El curso de base de datos aporta conocimientos sobre los distintos tipos de lenguajes, aplicaciones y programación para el diseño y mantenimiento de bases de datos de una empresa u organización.
                            </Card.Text>
                            <Card.Link href="/curso2">Más información</Card.Link>
                        </Card.Body>
                    </Card>
                    {/* Agregar más tarjetas de curso aquí */}
                </div>
                <div className="d-flex flex-wrap">
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Body>
                            <Card.Title>Curso 3: Electronica Digital</Card.Title>
                            <Card.Text>
                            La electrónica digital es una rama de la electrónica que se enfoca en el procesamiento de señales y datos utilizando señales discretas, generalmente representadas como combinaciones de ceros y
                            unos (bits).
                            </Card.Text>
                            <Card.Link href="/curso3">Más información</Card.Link>
                        </Card.Body>
                    </Card>
                    {/* Agregar más tarjetas de curso aquí */}
                </div>
                <div className="d-flex flex-wrap">
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Body>
                            <Card.Title>Curso 4: Investigacion de Operaciones</Card.Title>
                            <Card.Text>
                                La Investigacion de Operaciones es una disciplina que consiste en la aplicación de métodos analíticos avanzados con el propósito de apoyar el proceso de toma de decisiones, identificando los mejores
                                cursos de acción posibles.
                            </Card.Text>
                            <Card.Link href="/curso4">Más información</Card.Link>
                        </Card.Body>
                    </Card>
                    {/* Agregar más tarjetas de curso aquí */}
                </div>
                <div className="d-flex flex-wrap">
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Body>
                            <Card.Title>Curso 5: Metodos Numericos</Card.Title>
                            <Card.Text>
                            Los métodos numéricos son técnicas matemáticas diseñadas para encontrar soluciones aproximadas a problemas matemáticos que no pueden resolverse de manera exacta mediante métodos analíticos tradicionales.
                            </Card.Text>
                            <Card.Link href="/curso5">Más información</Card.Link>
                        </Card.Body>
                    </Card>
                    {/* Agregar más tarjetas de curso aquí */}
                </div>
            </Container>

            const Footer = () = (
  <footer>
    <Container>
      <p>Desarrollado por Josué Andrés López Díaz - Carnet: 9490 - 21 - 7374</p>
    </Container>
  </footer>
        </div>
    );
}

export default Index;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
