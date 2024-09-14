import React from 'react';
import { Accordion, Container, Table, ListGroup, Navbar, Nav} from 'react-bootstrap';

function Curso5() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-4">
                <h2>Curso 5: Metodos Numericos</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p>Detalles importantes sobre el curso 5: Metodos Numericos</p>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Aplicaciones:</td>
                                        <td>Ejemplos prácticos de problemas que requieren métodos numéricos para su solución.</td>
                                    </tr>
                                    {/* Agregar más filas aquí */}
                                    <tr>
                                        <td>Herramientas Computacionales:</td>
                                        <td>Introducción a software y lenguajes de programación comúnmente utilizados (por ejemplo, MATLAB, Python).</td>
                                    </tr>
                                    <tr>
                                        <td>Propagación de Errores:</td>
                                        <td>Cómo los errores se acumulan y afectan la precisión de los resultados.</td>
                                    </tr>
                                    <tr>
                                        <td>Método de Bisección:</td>
                                        <td>Técnica simple y robusta para encontrar raíces de funciones continuas.</td>
                                    </tr>
                                    <tr>
                                        <td>Método de Newton-Raphson:</td>
                                        <td>Método iterativo más rápido y eficiente para encontrar raíces, adecuado para funciones diferenciables.</td>
                                    </tr>
                                    <tr>
                                        <td>Polinomios Interpolantes:</td>
                                        <td>Uso de polinomios para estimar valores intermedios.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup>
                                <ListGroup.Item>Punto Clave 1: Historia, Aplicaciones, Importancia</ListGroup.Item>
                                {/* Agregar más puntos clave aquí */}
                                <ListGroup.Item>Punto Clave 2: Errores Absolutos y Relativos, Estabilidad</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 3: Método de la Secante, Método de la Falsa Posición</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 4: Interpolación de Lagrange, Series de Fourier</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 5: Cuadraturas Gaussianas, Integración Adaptativa</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 6: Método de Gauss-Jordan, Método de la Matriz Inversa</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            
  <footer>
    <Container>
      <p>Desarrollado por Josué Andrés López Díaz - Carnet: 9490 - 21 - 7374</p>
    </Container>
  </footer>
        </div>
    );
}

export default Curso5;
