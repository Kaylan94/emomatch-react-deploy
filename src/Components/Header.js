import React from 'react';
import logo from './logo.svg';
import Menu from './Menu';
import Menu2 from './Menu2';
import Help from './Help';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from 'react-router-dom';

//header component defined as a function
function Header() {
    return (
        //using react bootstrap a navigation bar containing the help icon and game timer div is created
        //here, the BrowserRouter is used to set the conditions for which menu component to show
        <header className="App-header">

                <Navbar className="navi" fixed="top">
                    <Container>        
                        <Navbar.Brand>
                            <Help />
                            <div className="timer">Game Time: <span id="time">01:00</span> left!</div>
                        </Navbar.Brand>
                    </Container>
                </Navbar>

                <img src={logo} className="App-logo" alt="logo" />

                <h1>Welcome to Emomatch</h1>

                <h3 id="letsPlay">Let's Play</h3>

                <br></br>
                <BrowserRouter>
                    <Route exact={true} path="/" component={Menu} />
                    <Route path="/Game" component={Menu2} />
                </BrowserRouter>
        </header>
    )
}

export default Header;