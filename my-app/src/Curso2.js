import React from 'react';
import { Accordion, Container, Table, ListGroup, Navbar, Nav} from 'react-bootstrap';

function Curso2() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-4">
                <h2>Curso 2: Base de datos</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p>Detalles importantes sobre el curso 2: Base de datos.</p>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Definición y Conceptos Básicos:</td>
                                        <td>Comprender qué es una base de datos, su importancia y los elementos clave (tablas, registros, campos).</td>
                                    </tr>
                                    {/* Agregar más filas aquí */}
                                    <tr>
                                        <td>Modelos de Bases de Datos:</td>
                                        <td>Comparación entre diferentes tipos de modelos, como relacional, jerárquico, en red, y orientado a objetos.</td>
                                    </tr>
                                    <tr>
                                        <td>Diagramas de Flujo de Datos:</td>
                                        <td>Representación gráfica de cómo los datos se mueven dentro del sistema.</td>
                                    </tr>
                                    <tr>
                                        <td>Monitoreo y Optimización del Rendimiento:</td>
                                        <td>Técnicas para mejorar la eficiencia y rendimiento de la base de datos.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup>
                                <ListGroup.Item>Punto Clave 1: Historia, Tipos de Bases de Datos</ListGroup.Item>
                                {/* Agregar más puntos clave aquí */}
                                <ListGroup.Item>Punto Clave 2: Entidades y Relaciones, Modelos ER, Normalización</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 3: Fundamentos, Manipulación, Definición, Control de Datos</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 4: Arquitectura DBMS, Seguridad, Respaldo y Recuperación</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 5: Distribuidas, NoSQL, Data Warehousing y OLAP</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 6: Teoría de Transacciones, Control de Concurrencia</ListGroup.Item>
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

export default Curso2;
