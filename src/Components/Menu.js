import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


//with the use of fontawesome and react-bootstrap a menu component is created here as a function
function Menu() {

    return (
        <Dropdown id="menu" >
            <Dropdown.Toggle id="dropdown-button-dark" variant="outline-light">
                <FontAwesomeIcon icon={faBars} /> &nbsp; &nbsp; Menu
            </Dropdown.Toggle>
            
            <Dropdown.Menu variant="dark">
                <Dropdown.Item href="/Game">Play</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Menu;