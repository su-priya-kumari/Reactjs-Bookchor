import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter  as Router} from 'react-router-dom';
import Banner from "./Components/Banner";
import ProductLayout from "./Components/ProductLayout";
import { Container,Row,Col } from 'react-bootstrap';
import List from "./Components/list";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <List/>
        <Banner/>
        <Container className="mt-5">
          <Row>
            <Col lg={12}>
              <ProductLayout/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </Router>
    
  );
}

export default App;
