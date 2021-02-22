import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

export default function Friends() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ friendsData, setFriendsData ] = useState()
  const [ search, setSearch ] = useState(null)

  const httpAddress = 'http://localhost:5000'

  useEffect(() => {
    getFriends()
  }, [])

  const getFriends = async () => {
    const response = await axios.get(httpAddress);
    setFriendsData(response.data.friends);
    setIsLoading(false);
  }

  const changeFav = async (friend) => {
    var data = {
      "favorite":!friend.favorite,
      "marital":friend.marital,
      "name":friend.name,
      "lastName":friend.lastName,
      "gender":friend.gender,
      "phone1":friend.phone1
    };
    var config = {
      method: 'patch',
      url: `${httpAddress}/${friend.id}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
    
    await axios(config)
    .then(function (response) {
      let newFriendsList = [...friendsData]
      let elementToChange = newFriendsList.find(el=>el===friend)
      elementToChange.favorite = response.data.friend.favorite
      setFriendsData(newFriendsList)
    })
  }

  const searchSpace = (e) => {
    let keyword = e.target.value;
    setSearch(keyword)
  }
  
  const items = (friendsData) => {
    let filteredFriends = [];
    let result
    friendsData.filter((data)=>{
      if(search === null) {
        filteredFriends = [...filteredFriends, data]
        result =  filteredFriends.map(friend=>(
        <ListGroup.Item key={friend.id}>
          {friend.name} {friend.lastName} {` `} 
          {friend.favorite ? 
          <Badge variant="light" onClick={()=>changeFav(friend)}><FontAwesomeIcon icon={fasStar} size="lg"/></Badge> : 
          <Badge variant="light" onClick={()=>changeFav(friend)}><FontAwesomeIcon icon={farStar} size="lg"/></Badge>
          }
        </ListGroup.Item>
      ))
      }
      else if(data.name.toLowerCase().includes(search.toLowerCase()) || data.lastName.toLowerCase().includes(search.toLowerCase())){
        filteredFriends = [...filteredFriends, data]
        result = filteredFriends.map(friend=>(
        <ListGroup.Item key={friend.id}>
          {friend.name} {friend.lastName} {` `} 
          {friend.favorite ? 
          <Badge variant="light" onClick={()=>changeFav(friend)}><FontAwesomeIcon icon={fasStar} size="lg"/></Badge> : 
          <Badge variant="light" onClick={()=>changeFav(friend)}><FontAwesomeIcon icon={farStar} size="lg"/></Badge>
          }
        </ListGroup.Item>
      ))
      }
    })
    return result
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Col sm={3} className="search-col py-4">
      <h4 className="px-3">Friends:</h4>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search" autoComplete="off" onChange={(e)=>searchSpace(e)}/>
          </Form.Group>
        </Form>
      </Container>
      <ListGroup variant="flush">
        {items(friendsData)}
      </ListGroup>
    </Col>
  )
}
