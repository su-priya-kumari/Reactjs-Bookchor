import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import book from './img/book-chor-logo-256.png';

const Header = () => {
    return (
    <React.Fragment>
            <Navbar expand="sm" variant="dark" className="pb-0">
                <Navbar.Brand className="text-dark"><img src={book} width="130px" alt=""></img></Navbar.Brand>

                <Nav className="">
                    <Nav.Link href="#" className="text-dark text-sm"><i class="fas fa-phone-alt"></i>+91-9050111218</Nav.Link>
                    <Nav.Link href="#" className="text-dark">Wholesale</Nav.Link>
                    <Nav.Link href="#" className="text-dark">Sell Book</Nav.Link> 
                </Nav>

                <Form className="form-inline mx-auto">
                   <input type="text" name="search" class="form-control" size="30" placeholder="Books / Author / ISBN"/>
                   <input type="submit" name="send" class="btn btn-rounded btn-danger" value="Search"/>
                </Form>

                <Nav className="ml-auto">
                    <Nav.Link href="#" className="text-dark">Login</Nav.Link> 
                </Nav>

            </Navbar>
            <hr></hr>
    </React.Fragment>
    );
}

export default Header;