import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatsBreedDropDown from './CatsBreedDropDown';
import { Container, Row, Col } from 'react-bootstrap';

import { getBreeds } from '../../actions/breeds'

const CatsBreedListLayout = ({ getBreeds, breeds }) => {

  useEffect(() => {
    getBreeds();
  },[getBreeds]);
  
  return (
    <Container>
      <h1>Cat Browser</h1>
      <Row>
        <Col md={3}>
          <CatsBreedDropDown breeds={breeds} />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => (
  { breeds: state.breeds.data }
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