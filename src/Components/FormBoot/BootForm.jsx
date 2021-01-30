import React from "react";
import {Form,Button,Col,Card} from 'react-bootstrap';
import "./BootForm.css";

const BootForm = () => {
  return (
    
      <Form className="mdriz" style={{marginLeft:"20px",textAlign:"left"}}>
      <h2 style={{margin:"10px",textAlign:"center"}}>Student Application</h2>
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Middle name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
  <Form.Row>
    <Col>
    <Form.Label style={{margin:"10px"}}>Gender</Form.Label>
    <Form.Control type="text" />
    </Col>
    <Col>
    <Form.Label style={{margin:"10px"}}>Age</Form.Label>
    <Form.Control type="text" />
    </Col>
    <Col>
    <Form.Label style={{margin:"10px"}}>Cast</Form.Label>
    <Form.Control type="text" />
    </Col>
    <Col>
    <Form.Label style={{margin:"10px"}}>Weight</Form.Label>
    <Form.Control type="text" />
    </Col>
 </Form.Row>
 <Form.Group>
 <Form.Label style={{margin:"10px"}}>Permanent Address</Form.Label>
    <Form.Control type="text" placeholder="your address" />
  </Form.Group>
  <Form.Row>
    <Col>
    <Form.Label style={{margin:"10px"}}>Mobile No.</Form.Label>
    <Form.Control type="text" />
    </Col>
    <Col>
    <Form.Label style={{margin:"10px"}}>Education</Form.Label>
    <Form.Control type="text" />
    </Col>
    <Col>
    <Form.Label style={{margin:"10px"}}>Additional Skills</Form.Label>
    <Form.Control type="text" />
    </Col>
 </Form.Row>
 <Form.Check style={{margin:"10px"}}
    type="checkbox"
    className="mb-2 mr-sm-2"
    id="inlineFormCheck"
    label="Remember me"
  />
   <Button style={{margin:"10px",marginLeft:"45%"}} type="submit" className="mb-2">
    Submit
  </Button>
</Form>

     
    
  );
};

export default BootForm;
