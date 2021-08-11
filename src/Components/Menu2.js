import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


//with the use of fontawesome and react-bootstrap a secondary menu component is created here as a function
function Menu2() {

    return (
        <Dropdown id="menu" >
            <Dropdown.Toggle id="dropdown-button-dark" variant="outline-light">
                <FontAwesomeIcon icon={faBars} /> &nbsp; &nbsp; Menu
            </Dropdown.Toggle>
            
            <Dropdown.Menu variant="dark">
                <Dropdown.Item href="./Game">Restart</Dropdown.Item>
                <Dropdown.Item href="/">Quit</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            
    )

}

export default Menu2;