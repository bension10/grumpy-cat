import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Card,
  Image,
  Button
} from 'react-bootstrap';
import { getBreedDetails } from '../../actions/breeds';

const CatDetailsLayout = ({
  getBreedDetails,
  breedDetails,
  isLoading
}) => {
  const { breedImageId } = useParams();

  useEffect(() => {
    getBreedDetails(breedImageId)
  }, [breedImageId, getBreedDetails]);

  if(isLoading) {
    return <Container>Loading...</Container>
  }

  return ( 
    <Container className="CardDetail">
      { breedDetails.breeds && breedDetails.breeds[0] && 
        <Card>
          <Card.Header>
            <Link to={`/?breed=${breedDetails.breeds[0].id}`}>
              <Button>Back</Button>
            </Link>
          </Card.Header>
          <Image src={breedDetails.url} style={{ width: "100%"}}/>
          <Card.Body>
            <h4>{breedDetails.breeds[0].name}</h4>
            <h5>Origin: {breedDetails.breeds[0].origin}</h5>
            <h6>{breedDetails.breeds[0].temperament}</h6>
            <p>{breedDetails.breeds[0].description}</p>
          </Card.Body>
        </Card>
      }
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.breedDetails.isLoading,
    breedDetails: state.breedDetails.data
  }
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getBreedDetails
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(CatDetailsLayout);
