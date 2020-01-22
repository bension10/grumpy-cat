import React from 'react';
import Form from 'react-bootstrap/Form';

const CatsBreedDropDown = ({ breeds }) => {
  return(
    <div className="form-group">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Breed</Form.Label>
        <Form.Control as="select">
          <option>Select Breed</option>
          {
            breeds.map(breed => {
              return(
                <option value={breed.id} key={breed.id}>
                  {breed.name}
                </option>)
            })
          }
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default CatsBreedDropDown;