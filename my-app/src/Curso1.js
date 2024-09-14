import React from 'react';
import { Accordion, Container, Table, ListGroup, Navbar, Nav} from 'react-bootstrap';

function Curso1() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-4">
                <h2>Curso 1: Compiladores</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p>Detalles importantes sobre el curso 1: Compiladores.</p>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Que es un compilador?</td>
                                        <td>el compilador divide el código fuente en una serie de tokens o símbolos que representan las palabras clave, identificadores, operadores y otros elementos del lenguaje de programación.</td>
                                    </tr>
                                    {/* Agregar más filas aquí */}
                                    <tr>
                                        <td>Que es un analizador lexico?</td>
                                        <td>es un programa informatico que traduce un programa escrito en un leguaje de programacion, generando un programa equivalente que la maquina sera capaz de interpretar.</td>
                                    </tr>
                                    <tr>
                                        <td>Que es un analisis sintactico?</td>
                                        <td>el compilador verifica la estructura del código fuente y su conformidad con la gramática del lenguaje de programación.</td>
                                    </tr>
                                    <tr>
                                        <td>Que es un analisis semantico?</td>
                                        <td>este verifica que las instrucciones del programa sean semánticamente correctas y coherentes, y realiza verificaciones como la asignación de tipos y la resolución de nombres.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup>
                                <ListGroup.Item>Punto Clave 1: Conceptos Básicos, Tipos de Compiladores</ListGroup.Item>
                                {/* Agregar más puntos clave aquí */}
                                <ListGroup.Item>Punto Clave 2: Tokens, Expresiones Regulares</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 3: Gramáticas, Árboles de Sintaxis, Algoritmos
                                de Análisis</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 4: Análisis Semántico, Tablas de Símbolos</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            const Footer = () => (
  <footer>
    <Container>
      <p>Desarrollado por Josué Andrés López Díaz - Carnet: 9490 - 21 - 7374</p>
    </Container>
  </footer>
);
        </div>
    );
}

export default Curso1;
