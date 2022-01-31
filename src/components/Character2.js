import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../";
import title from "./images/titulo.png";

let personaje = {
  nombre: "Vlada",
  nacionalidad: "Bosnia",
  sexo: "Mujer",
  arma: "Pistola con silenciador",
  ojos: "Azules",
  pelo: "Rubio",
  descripcion: ["fuerte", "agil", "guapa", "culta"],
  puntosConocimiento: 0,
  conocimientos: {
    "Artes Marciales": 0,
    Atletismo: 0,
    "Armas de fuego": 0,
    Diplomacia: 0,
    Callejeo: 0,
    Ciencias: 0,
  },
  drama: 0,
  cosas: ["cuerda", "ganzua"],
  palabras: [],
  heridas: 4,
};

const Character2 = () => {
  let conocimientos = Object.keys(personaje.conocimientos);
  let handicap;
  if (personaje.heridas === 1 || personaje.heridas === 2) {
    handicap = "Leve";
  }
  if (personaje.heridas === 3 || personaje.heridas === 4) {
    handicap = "Grave";
  }
  if (personaje.heridas === 5) {
    handicap = "Critico";
  }
  if (personaje.heridas === 6) {
    handicap = "Muerto";
  }
  return (
    <Container>
      <Row>
        <Col>
          <img className="title" src={title} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Title>DESCRIPCION</Card.Title>
            <ListGroup>
              {personaje.descripcion.map((carac) => {
                carac = carac[0].toUpperCase() + carac.substring(1);
                return <ListGroup.Item key={carac}>{carac}</ListGroup.Item>;
              })}
            </ListGroup>
          </Card>
          <Card>
            <Card.Title>CONOCIMIENTOS</Card.Title>
            <ListGroup>
              {conocimientos.map((conocimiento) => {
                return (
                  <ListGroup.Item key={conocimiento}>
                    <Row>
                      <Col>{conocimiento}</Col>
                      <Col>{personaje.conocimientos[conocimiento]}</Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>HERIDAS</Card.Title>
            <Card.Body>
              {personaje.heridas} {handicap}
            </Card.Body>
          </Card>
          <Card>
              <Card.Title>TUS COSAS</Card.Title>
              <ListGroup>
              {personaje.cosas.map((cosa) => {
                cosa = cosa[0].toUpperCase() + cosa.substring(1);
                return <ListGroup.Item key={cosa}>{cosa}</ListGroup.Item>;
              })}
            </ListGroup>
          </Card>
          <Card>
              <Card.Title>TUS PALABRAS</Card.Title>
              <ListGroup>
              {personaje.palabras.map((palabra) => {
                return <ListGroup.Item key={palabra}>{palabra}</ListGroup.Item>;
              })}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Character2;
