import React from "react";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class Addcourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      department: "",
      subject: "",
    };
  }

  OnTextChanging = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  SaveCourses = (event) => {
    event.preventDefault();
    let username = this.state.username;
    let department = this.state.department;
    let subject = this.state.subject;

    let CoursesObject = {
      StudentID: this.props.studentids,
      username: username,
      department: department,
      subject: subject,
    };

    this.props.addcourse(CoursesObject);
    this.props.history.push("/AddStudentInfo");
  };

  render() {
    return (
      <div>
        <div className="container p-5">
          <div className="row">
            <div className="col-7 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1">
              <h2 className="text-center"> Add Department & Courses</h2>
              <Form onSubmit={this.SaveCourses}>
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
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    placeholder="Enter name"
                    onChange={this.OnTextChanging}
                    value={this.state.department}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Courses</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Enter name"
                    onChange={this.OnTextChanging}
                    value={this.state.subject}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <input type="submit" value="Show Course" />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Addcourse);
