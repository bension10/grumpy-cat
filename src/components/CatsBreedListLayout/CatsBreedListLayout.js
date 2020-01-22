import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getBreeds } from '../../actions/breeds'

const CatsBreedListLayout = ({ getBreeds, breeds }) => {
  useEffect(() => {
    getBreeds();
  },[getBreeds]);
  
  return (
    <Container>
      <h1>Cat Browser</h1>
      <Row>
        <Col md={3}>Breed</Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => (
  { ...state }
);
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getBreeds
  },dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(CatsBreedListLayout);