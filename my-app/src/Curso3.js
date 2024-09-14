import React from 'react';
import { Accordion, Container, Table, ListGroup, Navbar, Nav} from 'react-bootstrap';

function Curso3() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-4">
                <h2>Curso 3: Electronica Digital</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p>Detalles importantes sobre el curso 3: Electronica Digital</p>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Conceptos Básicos:</td>
                                        <td>Fundamentos de la electrónica digital y su importancia en la tecnología actual.</td>
                                    </tr>
                                    {/* Agregar más filas aquí */}
                                    <tr>
                                        <td>Comparación con Electrónica Analógica:</td>
                                        <td>Diferencias y relaciones entre circuitos digitales y analógicos.</td>
                                    </tr>
                                    <tr>
                                        <td>Sistemas Binario, Octal, Hexadecimal:</td>
                                        <td>Cómo se representan los números en diferentes sistemas de numeración y cómo convertir entre ellos.</td>
                                    </tr>
                                    <tr>
                                        <td>Puertas Lógicas:</td>
                                        <td>Uso de puertas lógicas básicas (AND, OR, NOT, etc.) para construir circuitos digitales.</td>
                                    </tr>
                                    <tr>
                                        <td>Álgebra Booleana:</td>
                                        <td>Aplicación de leyes y teoremas de álgebra booleana para simplificar y diseñar circuitos digitales.</td>
                                    </tr>
                                    <tr>
                                        <td>Multiplexores y Demultiplexores:</td>
                                        <td>Componentes que permiten seleccionar o distribuir señales digitales.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup>
                                <ListGroup.Item>Punto Clave 1: Conceptos Básicos, Comparación con Electrónica Analógica</ListGroup.Item>
                                {/* Agregar más puntos clave aquí */}
                                <ListGroup.Item>Punto Clave 2: Sistemas Binario, Octal, Hexadecimal</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 3: Puertas AND, OR, NOT, NOR, NAND, XOR, Simplificación
                                de Booleanas</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 4: Multiplexores, Demultiplexores, Codificadores, Decodificadores</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 5: Flip-Flops, Contadores, Registros</ListGroup.Item>
                                <ListGroup.Item>Punto Clave 6: Diagramas de Estados, Diseño de Máquinas de Estados</ListGroup.Item>
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
        </div>
    );
}

export default Curso3;
