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


export default function EditFriend(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [ isLoading, setIsLoading ] = useState(true);
  const [ friendData, setFriendData ] = useState();
  const toggleFriends = props.toggleFriends
  const newFriend = props.newFriend

  useEffect(() => {
    getFriends()
    
  }, [props.friendId])

  //Get fields for selected friend
  const getFriends = async () => {
    const response = await axios.get(`http://friendlistback-env.eba-dpw2ityc.us-east-2.elasticbeanstalk.com/${props.friendId}`);
    setFriendData(response.data.friend);
    setIsLoading(false);
  }

  //update fields for selected friend
  const onValueChange = (evt) => {
    const value =
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setFriendData({
      ...friendData,
      [evt.target.name]: value
    });
  }

  //Submit changes
  const httpAddress = 'http://friendlistback-env.eba-dpw2ityc.us-east-2.elasticbeanstalk.com'

  const onSubmit = async data => {
    var data = {
      "favorite":friendData.favorite,
      "marital":friendData.marital,
      "name":friendData.name,
      "lastName":friendData.lastName,
      "gender":friendData.gender,
      "phone1":friendData.phone1,
      "phoneType1":friendData.phoneType1,
      "phone2":friendData.phone2,
      "phoneType2":friendData.phoneType2,
      "phone3":friendData.phone3,
      "phoneType3":friendData.phoneType3,
    };
    var config = {
      method: 'patch',
      url: `${httpAddress}/${props.friendId}`,
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


  if (isLoading) {
    return <div>Loading...</div>
  }

  //Main return
  return (
    <Col sm={9} className="py-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row className="justify-content-between">
        <h4 className="px-3">Edit Friend</h4>
        <div key={`custom-checkbox`} className="mb-3">
          <Form.Check inline label="Favorite" type="checkbox" id="inline-radio-1" value="true" name="favorite" ref={register} 
          checked={friendData.favorite}
          onChange={onValueChange}  
          />
        </div>
        </Form.Row>
        <Form.Row>
          <Col sm={6} className="px-5">
            <Form.Control className="mb-2" placeholder="First name" name="name" ref={register} value={friendData.name} onChange={onValueChange} />
            <h5 className="py-3 mb-0">Gender</h5>
            <div key={`custom-inline-radio`} className="mb-3" >
              <Form.Check inline label="Male" type="radio" name="gender" id="inline-radio-1" value="male" ref={register} checked={friendData.gender ==='male'} onChange={onValueChange}/>
              <Form.Check inline label="Female" type="radio" name="gender" id="inline-radio-2" value="female" ref={register} checked={friendData.gender ==='female'} onChange={onValueChange}/>
            </div>
          </Col>
          <Col sm={6} className="px-5">
            <Form.Control placeholder="Last name" name="lastName" ref={register} value={friendData.lastName} onChange={onValueChange} />
            <h5 className="py-3 mb-0">Marital Status</h5>
            <div className="mb-3" >
              <Form.Check inline label="Married" type="radio" name="marital" id="inline-radio-12" value={true} ref={register} checked={friendData.marital === true} onChange={onValueChange}/>
              <Form.Check inline label="Unmarried" type="radio" name="marital" id="inline-radio-22" value={false} ref={register} checked={!friendData.marital === true} onChange={onValueChange}/>
            </div>
          </Col>
        </Form.Row>
        <Form.Row className="px-3 pt-3 search-col">
          <Col sm={4} className="py-2" >
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control as="select" size="md" custom name="phoneType1" onChange={onValueChange} ref={register} value={friendData.phoneType1}>
                <option>Mobile</option>
                <option>Home</option>
                <option>Job</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={6} className="py-2">
            <Form.Group>
            <Form.Control placeholder="Number" name="phone1" onChange={onValueChange} value={friendData.phone1} ref={register}/>
            </Form.Group>
          </Col>
        </Form.Row>
        {friendData.phone2 &&
        <Form.Row className="px-3 pt-3 search-col">
          <Col sm={4} className="py-2" >
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control as="select" size="md" custom name="phoneType2" onChange={onValueChange} ref={register} value={friendData.phoneType2}>
                <option>Mobile</option>
                <option>Home</option>
                <option>Job</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={6} className="py-2">
            <Form.Group>
            <Form.Control placeholder="Number" name="phone2" onChange={onValueChange} value={friendData.phone2} ref={register}/>
            </Form.Group>
          </Col>
        </Form.Row>
        }
        {friendData.phone3 &&
        <Form.Row className="px-3 pt-3 search-col">
          <Col sm={4} className="py-2" >
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control as="select" size="md" custom name="phoneType3" onChange={onValueChange} ref={register} value={friendData.phoneType3}>
                <option>Mobile</option>
                <option>Home</option>
                <option>Job</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={6} className="py-2">
            <Form.Group>
            <Form.Control placeholder="Number" name="phone3" onChange={onValueChange} value={friendData.phone3} ref={register}/>
            </Form.Group>
          </Col>
        </Form.Row>
        }
        <Col className="py-3" md={{ span: 6, offset: 8 }}>
          <Row>
          <Button className="py-2 mx-2" variant="secondary" onClick={()=>{newFriend()}}>
            Cancel
          </Button>
          <Button className="py-2 mx-2" variant="primary" type="submit">
            Update
          </Button>
          </Row>
        </Col>
      </Form>
    </Col>
  )
}
