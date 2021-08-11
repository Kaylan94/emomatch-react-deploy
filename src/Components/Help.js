import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';


//with the use of fontawesome and react-bootstrap a help component is created here as a function
//a button is created and when clicked on a modal overlays the pages and displays the relavant info.
function Help() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

  return (
    <>
      
      {values.map((v, idx) => (
        <Button key={idx} className="me-2" variant="outline-light" onClick={() => handleShow(v)}>
          <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal className="helpModal" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Emomatch Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Game Play:<br></br>
          To begin, open two cards at a time by clicking on them. The aim is match all the cards with their partner.

          <br></br><br></br>Hints:<br></br>
          If a card does not close after you have selected its possible partner. Simply double click on it to close it.
          
          <br></br><br></br>Rules:<br></br>
          - You may only open two cards at a time.<br></br>
          - You have 1min30sec to complete the game by matching all card.<br></br>
          - You may restart the game at any point if you wish, but the cards will be shuffled upon each game start.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Help;
