import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


export default function NewFriend() {
  return (
    <Col sm={9} className="py-4">
      <Form>
        <Form.Row className="justify-content-between">
        <h4 className="px-3">Create Friend</h4>
        <div key={`custom-checkbox`} className="mb-3">
          <Form.Check inline label="Favorite" type="checkbox" id="inline-radio-1" value="male" />
        </div>
        </Form.Row>
        <Form.Row>
          <Col sm={6} className="px-5">
            <Form.Control className="mb-2" placeholder="First name" />
            <h5 className="py-3 mb-0">Gender</h5>
            <div key={`custom-inline-radio`} className="mb-3">
              <Form.Check inline label="Male" type="radio" name="gender-options" id="inline-radio-1" value="male" />
              <Form.Check inline label="Female" type="radio" name="gender-options" id="inline-radio-2" value="female" />
            </div>
          </Col>
          <Col sm={6} className="px-5">
            <Form.Control placeholder="Last name" />
            <h5 className="py-3 mb-0">Marital Status</h5>
            <div className="mb-3">
              <Form.Check inline label="Married" type="radio" name="married-options" id={`inline-radio-1`} value={true} />
              <Form.Check inline label="Unmarried" type="radio" name="married-options" id={`inline-radio-2`} value={false}/> 
            </div>
          </Col>
        </Form.Row>
        <Form.Row className="px-5 py-3 search-col">
          <Col sm={6} >
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control as="select" size="md" custom>
                <option>Mobile</option>
                <option>Home</option>
                <option>Job</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
            <Form.Control placeholder="Number" />
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </Col>
  )
}
