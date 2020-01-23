import React from 'react';
import { Row, Col, Form} from 'react-bootstrap';

const CatsBreedDropDown = ({ breeds, onHandleChange }) => {
  return(
    <Row>
      <Col md={3}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Breed</Form.Label>
          <Form.Control as="select" onChange={onHandleChange}>
            <option value="">Select Breed</option>
            {
              breeds.map(breed => {
                return(
                  <option
                    value={breed.id}
                    key={breed.id}
                  >
                    {breed.name}
                  </option>)
              })
            }
          </Form.Control>
        </Form.Group>
      </Col>
  </Row>
  );
};

export default CatsBreedDropDown;