import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatsBreedDropDown from './CatsBreedDropDown';
import CatsBreedImages from './CatsBreedImages';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { getBreeds, getBreedImages } from '../../actions/breeds'

const CatsBreedListLayout = ({
  getBreeds,
  getBreedImages,
  breeds,
  breedsImagesById
}) => {
  const [id, setBreed] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBreeds();
  },[getBreeds]);

  useEffect(() => {
    if(id) {
      getBreedImages({ id, page });
    }
  },[getBreedImages, id, page]);

  const handleOptionChange = useCallback(event => {
    const id = event.target.value;
    setBreed(id);
    setPage(1);
  }, []);

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);
  
  return (
    <Container>
      <h1>Cat Browser</h1>
      <CatsBreedDropDown
        breeds={breeds}
        onHandleChange={handleOptionChange}
      />
      <CatsBreedImages
        breedsImagesById={breedsImagesById[id]}
      />
      <Row>
        <Col md={3}>
          <Button variant="success" onClick={loadMore}>
            Primary
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => (
  {
    breeds: state.breeds.data,
    breedsImagesById: state.breedsImagesById.data
  }
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