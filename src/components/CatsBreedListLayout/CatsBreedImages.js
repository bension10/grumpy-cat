import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Image,
  Button
} from 'react-bootstrap';

const CatsBreedImages = ({ selectedBreedImages }) => {
  if(!selectedBreedImages.length) {
    return(
      <Row>
        <Col>
          <p>No cats available</p>
        </Col>
      </Row>
    ); 
  }

  return(
    <Row>
      {selectedBreedImages.map(image => {
        return(
          <Col md={3} sm={6} key={image.id} >
            <Card>
              <Image src={image.url}/>
                <Card.Body>
                  <Link to={`/${image.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </Card.Body>
            </Card>
          </Col>
          )
        })
      }
    </Row>
  );
};

export default CatsBreedImages;