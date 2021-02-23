import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Friends from './components/Friends';
import NewFriend from './components/NewFriend';

function App() {
const [ afterRequest, setAfterRequest ] = useState(false)
const toggleRequest = () => {
  setAfterRequest(!afterRequest)
}

  return (
    <Container fluid>
      <Row>
        <Friends toggleRequest={afterRequest}/>
        <NewFriend toggleFriends={toggleRequest} />
      </Row>
    </Container>
  );
}

export default App;
