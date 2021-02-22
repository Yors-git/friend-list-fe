import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default function NewFriend() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Col sm={9} className="py-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row className="justify-content-between">
        <h4 className="px-3">Create Friend</h4>
        <div key={`custom-checkbox`} className="mb-3">
          <Form.Check inline label="Favorite" type="checkbox" id="inline-radio-1" value="true" name="favorite" ref={register}/>
        </div>
        </Form.Row>
        <Form.Row>
          <Col sm={6} className="px-5">
            <Form.Control className="mb-2" placeholder="First name" name="name" ref={register}/>
            <h5 className="py-3 mb-0">Gender</h5>
            <div key={`custom-inline-radio`} className="mb-3">
              <Form.Check inline label="Male" type="radio" name="gender" id="inline-radio-1" value="male" ref={register}/>
              <Form.Check inline label="Female" type="radio" name="gender" id="inline-radio-2" value="female" ref={register}/>
            </div>
          </Col>
          <Col sm={6} className="px-5">
            <Form.Control placeholder="Last name" name="lastName" ref={register}/>
            <h5 className="py-3 mb-0">Marital Status</h5>
            <div className="mb-3">
              <Form.Check inline label="Married" type="radio" name="marital" id={`inline-radio-1`} value={true} ref={register}/>
              <Form.Check inline label="Unmarried" type="radio" name="marital" id={`inline-radio-2`} value={false} ref={register}/> 
            </div>
          </Col>
        </Form.Row>

          <Form.Row className="px-5 py-3 search-col">
            <Col sm={6} >
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Control as="select" size="md" custom name="phoneType1" ref={register}>
                  <option>Mobile</option>
                  <option>Home</option>
                  <option>Job</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
              <Form.Control placeholder="Number" name="phone1" ref={register}/>
              </Form.Group>
            </Col>
          </Form.Row>
          
        <Col className="py-3" md={{ span: 6, offset: 11 }}>
          <Button className="py-2" variant="primary" type="submit">
            Create
          </Button>
        </Col>
      </Form>
    </Col>
  )
}
