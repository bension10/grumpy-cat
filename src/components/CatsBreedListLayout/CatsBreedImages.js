import React from 'react';
import {
  Row,
  Col,
  Card,
  Image,
  Button
} from 'react-bootstrap';

const CatsBreedImages = ({ breedsImagesById }) => {

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
              <Button variant="primary">View Details</Button>
            </Card>
          </Col>
          )
        })
      }
    </Row>
  );
};

export default CatsBreedImages;