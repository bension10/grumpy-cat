import React, { useEffect, useState, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useLocation } from 'react-router-dom';
import CatsBreedDropDown from './CatsBreedDropDown';
import CatsBreedImages from './CatsBreedImages';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import { getBreeds, getBreedImages, clearBreedImages } from '../../actions/breeds'

// compare previous selectedBreedImages count
const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value;
  })

  return ref.current;
}

const CatsBreedListLayout = ({
  getBreeds,
  getBreedImages,
  breeds,
  selectedBreedImages,
  isLoading,
  clearBreedImages
}) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const breedId = query.get('breed');
  const [id, setBreed] = useState(breedId);
  const [page, setPage] = useState(1);
  const breedImagesCountRef = usePrevious(selectedBreedImages.length);
  const breedIdRef = usePrevious(breedId);
  
  // run only once when component mounts e.g page reload
  useEffect(() => {
    if(breedIdRef) {
      getBreedImages({ id: breedId, page: 1 });
    }
  }, [breedIdRef]);

  // keep a copy of current state
  // instead of fetching the API again.
  useEffect(() => {
    if(!breeds.length) {
      getBreeds();
    }
  },[getBreeds, breeds]);

  const handleOptionChange = useCallback(event => {
    const id = event.target.value;
    // clear data to make way for new payload
    clearBreedImages();
    if(!!id) {
      getBreedImages({ id, page: 1});
    }
    setBreed(id);
    setPage(1);
  }, [getBreedImages, clearBreedImages]);

  const handleLoadMore = useCallback(() => {
    setPage(prevPage => {
      getBreedImages({ id, page: prevPage + 1 })
      return prevPage + 1;
    });
  }, [getBreedImages, id]);

  const showLoadMoreButton = 
    breedImagesCountRef !== selectedBreedImages.length 
    || page === 1; 

  return (
    <div className="Home">
      <Container>
      <h1>Cat Browser</h1>
      <CatsBreedDropDown
        breeds={breeds}
        onHandleChange={handleOptionChange}
        breedId={id || ''}
      />
      <CatsBreedImages
        selectedBreedImages={selectedBreedImages}
        breedId={id}
      />
      <Row>
        {
          showLoadMoreButton &&
            <Col md={3}>
              <Button
                variant="success"
                onClick={handleLoadMore}
                disabled={!id}
              >
                {
                  isLoading ? 'Loading cats...' : 'Load More'
                }
              </Button>
          </Col>  
        }
      </Row>
    </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breeds: state.breeds.data,
    isLoading: state.selectedBreedImages.isLoading,
    selectedBreedImages: state.selectedBreedImages.data
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getBreeds,
    getBreedImages,
    clearBreedImages
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(CatsBreedListLayout);