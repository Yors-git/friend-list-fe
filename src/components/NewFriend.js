import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as fasPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus as fasMinus } from '@fortawesome/free-solid-svg-icons';


export default function NewFriend(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const toggleFriends = props.toggleFriends
  const httpAddress = 'http://localhost:5000'
  const onSubmit = async data => {
    console.log(data);
    var data = {
      "favorite":data.favorite,
      "marital":data.marital,
      "name":data.name,
      "lastName":data.lastName,
      "gender":data.gender,
      "phone1":data.phone1,
      "phoneType1":data.phoneType1,
      "phone2":data.phone2,
      "phoneType2":data.phoneType2,
      "phone3":data.phone3,
      "phoneType3":data.phoneType3,
    };
    var config = {
      method: 'post',
      url: `${httpAddress}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
    
    await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      toggleFriends()
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const Fields = (id, phoneType, phone) => { return { id: id, phoneType: phoneType, phone: phone } }

  const [ fields, setFields ] = useState([])
  const [ fieldCount, setFieldCount ] = useState(2)

  const addField = () => {
    if(fieldCount < 4){
    let toAdd = Fields(fieldCount, `phoneType${fieldCount}`, `phone${fieldCount}`)
    let newFields = [...fields, toAdd]
    setFields(newFields)
    setFieldCount(fieldCount+1)
  }}

  const removeField = () => {
    let newFields = fields
    newFields.pop()
    setFields(newFields)
    setFieldCount(fieldCount-1)
  }

  const showNumberFields = (fields) => {
    if(fields){
    return fields.map(form=>(
      <Form.Row key={form.id} className="px-3 pt-3 mt-1 search-col">
        <Col sm={4} className="py-2" >
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Control as="select" size="md" custom name={form.phoneType} ref={register}>
              <option>Mobile</option>
              <option>Home</option>
              <option>Job</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm={6} className="py-2">
          <Form.Group>
          <Form.Control placeholder="Number" name={form.phone} ref={register}/>
          </Form.Group>
        </Col>
        <Col sm={2} className="py-2">
          {(form.id < 3) &&
            <FontAwesomeIcon className="mx-3" icon={fasPlus} size="2x" onClick={()=>addField()}/>
          }
          <FontAwesomeIcon className="mx-3" icon={fasMinus} size="2x" onClick={()=>removeField()}/>
        </Col>
      </Form.Row>
    ))
    }
  }

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

        <Form.Row className="px-3 pt-3 search-col">
          <Col sm={4} className="py-2" >
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control as="select" size="md" custom name="phoneType1" ref={register}>
                <option>Mobile</option>
                <option>Home</option>
                <option>Job</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={6} className="py-2">
            <Form.Group>
            <Form.Control placeholder="Number" name="phone1" ref={register}/>
            </Form.Group>
          </Col>
          <Col sm={2} className="py-2">
            <FontAwesomeIcon className="mx-3" icon={fasPlus} size="2x" onClick={()=>addField()}/>
          </Col>
        </Form.Row>
        {showNumberFields(fields)}

        <Col className="py-3" md={{ span: 6, offset: 10 }}>
          <Button className="py-2" variant="primary" type="submit">
            Create
          </Button>
        </Col>
      </Form>
    </Col>
  )
}
