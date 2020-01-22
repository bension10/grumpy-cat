import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CatsBreedListLayout = () => (
  <Container>
    <h1>Cat Browser</h1>
    <Row>
      <Col md={3}>Breed</Col>
    </Row>
  </Container>
);

export default CatsBreedListLayout;