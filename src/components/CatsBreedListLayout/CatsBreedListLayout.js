import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatsBreedDropDown from './CatsBreedDropDown';
import { Container, Row, Col } from 'react-bootstrap';

import { getBreeds, getBreedImages } from '../../actions/breeds'

const CatsBreedListLayout = ({ getBreeds, getBreedImages, breeds }) => {
  const [selectedBreed, setBreed] = useState('');

  useEffect(() => {
    getBreeds();
  },[getBreeds]);

  useEffect(() => {
    getBreedImages(selectedBreed);
  },[getBreedImages, selectedBreed]);

  const handleOptionChange = useCallback(event => {
    const breed = event.target.value;
    setBreed(breed);
  }, []);
  
  return (
    <Container>
      <h1>Cat Browser</h1>
      <Row>
        <Col md={3}>
          <CatsBreedDropDown
            breeds={breeds}
            onHandleChange={handleOptionChange}
          />
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
    getBreeds,
    getBreedImages
  },dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(CatsBreedListLayout);