import React from 'react';
import { Accordion, Container, Table, ListGroup, Navbar, Nav} from 'react-bootstrap';

function Curso4() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-4">
                <h2>Curso 4: Investigacion de Operaciones</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p>Detalles importantes sobre el curso 4: Investigacion de Operaciones</p>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Historia y Definición:</td>
                                        <td>Orígenes y evolución de la IO, y su importancia en la toma de decisiones.</td>
                                    </tr>
                                    {/* Agregar más filas aquí */}
                                    <tr>
                                        <td>Aplicaciones:</td>
                                        <td>Cómo se aplican las técnicas de IO en la industria, desde la logística hasta la planificación estratégica.</td>
                                    </tr>
                                    <tr>
                                        <td>Formulación de Modelos:</td>
                                        <td>Proceso de traducción de problemas reales en modelos matemáticos.</td>
                                    </tr>
                                    <tr>
                                        <td>Tipos de Modelos:</td>
                                        <td>Diferencias entre modelos lineales, no lineales, estocásticos y deterministas.</td>
                                    </tr>
                                    <tr>
                                        <td>Problemas de Programación Lineal:</td>
                                        <td>Estructura y resolución de problemas donde las relaciones son lineales.</td>
                                    </tr>
                                    <tr>
                                        <td>Métodos Simplex:</td>
                                        <td>Algoritmo utilizado para encontrar la solución óptima de problemas de programación lineal.</td>
                                    </tr>
                                </tbody> 
                            </Table>
                            <ListGroup>
                                <ListGroup.Item>Punto Clave 1: Enfoques Cuantitativos, Aplicaciones Modernas</ListGroup.Item>
                                {/* Agregar más puntos clave aquí */}
                                <ListGroup.Item>Punto Clave 2: Programación Lineal con Restricciones No Convexas</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 3: Teorema de Dualidad, Análisis de Sensibilidad</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 4: Métodos de Compromiso, Algoritmos Evolutivos</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 5: Algoritmos Genéticos, Recocido Simulado</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 6: Algoritmos de Caminos Mínimos, Redes de Flujo</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            
  <footer>
    <Container>
      <p>Desarrollado por Josué Andrés López Díaz - Carnet: XXXX</p>
    </Container>
  </footer>
        </div>
    );
}

export default Curso4;
