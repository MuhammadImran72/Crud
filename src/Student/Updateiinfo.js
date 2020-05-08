import React from "react";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Updateinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.updateobject.username,
      rollnumber: this.props.updateobject.rollnumber,
      email: this.props.updateobject.email,
      gender: this.props.updateobject.gender,
    };
  }

  OnTextChanging = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  SaveAllContent = (event) => {
    event.preventDefault();

    let username = this.state.username;
    let rollnumber = this.state.rollnumber;
    let email = this.state.email;
    let gender = this.state.gender;

    let StudentObject = {
      username: username,
      rollnumber: rollnumber,
      email: email,
      gender: gender,
    };

    this.props.updatestudentdata(StudentObject);
    this.props.history.push("/AddStudentInfo");
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-7 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1">
              <Form onSubmit={this.SaveAllContent}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter name"
                    onChange={this.OnTextChanging}
                    value={this.state.username}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Roll Number</Form.Label>
                  <Form.Control
                    type="password"
                    name="rollnumber"
                    placeholder="Enter roll number"
                    onChange={this.OnTextChanging}
                    value={this.state.rollnumber}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.OnTextChanging}
                    value={this.state.email}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    name="gender"
                    placeholder="Enter gender"
                    onChange={this.OnTextChanging}
                    value={this.state.gender}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <input type="submit" value="Show Info" />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Updateinformation);
