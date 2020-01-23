import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Image,
  Button
} from 'react-bootstrap';

const CatsBreedImages = ({ breedsImagesById, breedId }) => {

  if(!breedsImagesById) {
    return(<div>No Images...</div>) 
  }

  return(
    <Row>
      {breedsImagesById.map(image => {
        return(
          <Col md={3} key={image.id}>
            <Card>
              <Image src={image.url} thumbnail/>
                <Link to={`/${image.id}`}>
                  <Button>View Details</Button>
                </Link>
            </Card>
          </Col>
          )
        })
      }
    </Row>
  );
};

export default CatsBreedImages;