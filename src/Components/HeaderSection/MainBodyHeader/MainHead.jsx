import React from "react";
import {
  Jumbotron,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,Image
} from "react-bootstrap";

export const MainHead = () => {
  return (
    <div>
      <Jumbotron>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
      <Image
              src="Assets/new-bmw-logo.jpg"
              width="70"
              height="50"
              className="d-inline-block align-top"
              alt="M-series logo"
        className="d-inline-block align-center"
      />{' '}
      M-Series
    </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </Jumbotron>
    </div>
  );
};
