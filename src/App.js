import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Friends from './components/Friends';
import NewFriend from './components/NewFriend';
import EditFriend from './components/EditFriend';

function App() {
  const [ afterRequest, setAfterRequest ] = useState(false)
  const [ friendId, setFriendId ] = useState()
  const toggleRequest = () => {
    setAfterRequest(!afterRequest)
  }

  const getFriendId = (passedfriendId) => {
    setFriendId(passedfriendId)
  }
  
  const newFriend = () => {
    setFriendId('')
  }

  return (
    <Container fluid>
      <Row>
        <Friends toggleRequest={afterRequest} getFriendId={getFriendId} newFriend={newFriend}/>
        {friendId ? 
          <EditFriend toggleFriends={toggleRequest} friendId={friendId} newFriend={newFriend}/>
        :
          <NewFriend toggleFriends={toggleRequest} />
        }
      </Row>
    </Container>
  );
}

export default App;
