import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
FormInput,
FormSelect
} from "shards-react";
import { MDBDatePickerV5 } from 'mdbreact';

class Booking extends Component {


  render() {
    return (
      <div>

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>Book an Usher</h1>
              <p>Tour Guide & Private Guided Tours</p>
            </header>

            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="6" md="6" sm="6">
 		<Row className="justify-content-md-center">
                  <p>Choose City : </p>
		<FormSelect className="ml-3 mt-1 w-50">
			      <option value="Delhi">Delhi</option>
			      <option value="Jaipur">Jaipur</option>
			      <option value="Mumbai" >Mumbai</option>
				<option value="Agra" >Agra</option>
				<option value="Bangalore" >Bangalore</option>
				<option value="Kolkata" >Kolkata</option>
				<option value="Varanasi" >Varanasi</option>
				<option value="Kochi" >Kochi</option>
				<option value="Chennai" >Chennai</option>
				<option value="Udaipur" >Udaipur</option>
				<option value="Pune" >Pune</option>
				<option value="Hyderabad" >Hyderabad</option>
				<option value="Jaisalmer" >Jaisalmer</option>
				<option value="Amritsar" >Amritsar</option>
				<option value="Mysore" >Mysore</option>
				<option value="Madurai" >Madurai</option>
				<option value="Panaji" >Panaji</option>
		</FormSelect>
                  </Row>
                </Col>
                <Col lg="6" md="6" sm="6">
 		<Row className="justify-content-md-center">
                  <p>Enter Landmark : </p>
			<FormInput className="ml-3 mt-1 w-50" placeholder="Destination" />
                  </Row>
                </Col>



		</Row>
 		<Row>
                <Col lg="6" md="6" sm="6">
 		<Row className="justify-content-md-center">
                  <p>Choose Date : </p>
			<FormInput type="date"  className="ml-3 mt-1 w-50" />
                  </Row>
                </Col>

                <Col lg="6" md="6" sm="6">
 		<Row className="justify-content-md-center">
                  <p>Choose Time : </p>
			<FormInput type="time"  className="ml-3 mr-3 mt-1 w-25"  />
			<p> to </p>
			<FormInput type="time"  className="ml-3 mt-1 w-25"  />
                  </Row>
                </Col>


              </Row>
		<Row className="mt-3 justify-content-md-center">
		  <Button theme="secondary"> Book</Button>
		</Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default Booking;
