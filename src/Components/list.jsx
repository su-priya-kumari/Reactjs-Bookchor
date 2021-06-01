import React from'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

const list = () => {
    return (
        <React.Fragment>
            <Container className="">
            <Navbar expand="sm" variant="dark" >

               <Nav className="ms-auto">
                    <Nav.Link href="#" className="text-secondary font-weight-bold">Categories</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">59 Store</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">79 Store</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">Newly Added Books</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">Featured Books</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">Young Adult</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">Rare & Collectables</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">Lock The Box</Nav.Link> 
                    <Nav.Link href="#" className="text-secondary font-weight-bold">Deals Store</Nav.Link> 
               </Nav>

            </Navbar>
            </Container>
        </React.Fragment>
    );
}
export default list;