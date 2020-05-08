import React from "react";
import Header from "./Header/Header";
import { Switch, Route, Link } from "react-router-dom";
import Addinformation from "./Student/Addinfo";
import { Button } from "react-bootstrap";
import Updateinformation from "./Student/Updateiinfo";
import Addcourse from "./Student/Addcourse";
import ViewAllContent from "./Student/ViewAllContent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StoreStudents: [],
      UpateStudentObject: {},
      UpdateStudentID: null,
      StoreCourse: [],
      StudentID: null,
      ViewCourseArray: [],
      studentinfomation: null,
    };
  }

  addstudentdata = (obj) => {
    let myArray = this.state.StoreStudents;
    myArray.push(obj);
    this.setState({
      StoreStudents: myArray,
    });
  };

  deletedata = (stuindex) => {
    let deleteArray = this.state.StoreStudents;
    deleteArray.splice(stuindex, 1);
    this.setState({
      StoreStudents: deleteArray,
    });
  };

  updatedata = (userobj, index) => {
    this.setState({
      UpateStudentObject: userobj,
      UpdateStudentID: index,
    });
  };

  saveupdatedate = (obj) => {
    let myupdateArray = this.state.StoreStudents;
    myupdateArray[this.state.UpdateStudentID] = obj;
    this.setState({
      StoreStudents: myupdateArray,
    });
  };

  addcourses = (index) => {
    this.setState({
      StudentID: index,
    });
  };

  addcoursedata = (obj) => {
    let mycourseArray = this.state.StoreCourse;
    mycourseArray.push(obj);
    this.setState({
      StoreCourse: mycourseArray,
    });
  };

  ViewAllCourse = (indexcourse) => {
    let myviewArray = this.state.StoreStudents;
    let studentinfomation = null;

    for (let index = 0; index < myviewArray.length; index++) {
      if (indexcourse === index) {
        studentinfomation = myviewArray[index];
      }

      console.log(studentinfomation);
    }
    let myviewcourse = this.state.StoreCourse;
    let studentcourse = [];

    for (let index = 0; index < myviewcourse.length; index++) {
      if (myviewcourse[index].StudentID == indexcourse) {
        studentcourse.push(myviewcourse[index]);
      }
      console.log(studentcourse);
    }

    // for (let index = 0; index < myviewArray.length; index++) {
    //   for (let index = 0; index < myviewcourse.length; index++) {
    //     if (studentinfomation === studentcourse) {
    //       console.log(" index match ");
    //     }
    //   }
    // }

    this.setState({
      studentinfomation: studentinfomation,
      ViewCourseArray: studentcourse,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Header></Header>
          </Route>

          <Route path="/AddStudentInfo">
            <Header></Header>
            <Addinformation adddata={this.addstudentdata}> </Addinformation>

            <div className="container pt-5">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-center"> Dispaly Student Data</h2>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> SR</th>
                        <th> Name</th>
                        <th> Roll Number</th>
                        <th> Email</th>
                        <th> Gender</th>
                        <th> Option</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.StoreStudents.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td> {user.rollnumber}</td>
                            <td> {user.email}</td>
                            <td> {user.gender}</td>
                            <td>
                              <Button
                                variant="danger"
                                onClick={() => {
                                  this.deletedata(index);
                                }}
                              >
                                Delete
                              </Button>

                              <Button
                                variant="success"
                                onClick={() => {
                                  this.updatedata(user, index);
                                }}
                              >
                                <Link to={`UpdateStudentInfo/${index}`}>
                                  {" "}
                                  Update
                                </Link>
                              </Button>

                              <Button
                                variant="success"
                                onClick={() => {
                                  this.addcourses(index);
                                }}
                              >
                                <Link to="AddStudentCourse"> Add Course</Link>
                              </Button>

                              <Button
                                variant="success"
                                onClick={() => {
                                  this.ViewAllCourse(index);
                                }}
                              >
                                <Link to="ViewAllContent"> View Courses</Link>
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-center"> Student Department & Course</h2>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> SR</th>
                        <th> Name</th>
                        <th>Department</th>
                        <th> Course</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.StoreCourse.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td> {index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.department}</td>
                            <td>{user.subject}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Route>

          <Route path="/UpdateStudentInfo">
            <Header></Header>
            <Updateinformation
              updateobject={this.state.UpateStudentObject}
              updatestudentdata={this.saveupdatedate}
              {...this.props}
            ></Updateinformation>
          </Route>

          <Route path="/AddStudentCourse">
            <Addcourse
              addcourse={this.addcoursedata}
              studentids={this.state.StudentID}
            ></Addcourse>
          </Route>

          <Route path="/ViewAllContent">
            <ViewAllContent
              views={this.ViewAllCourse}
              viewstudents={this.state.studentinfomation}
              viewcourse={this.state.ViewCourseArray}
            ></ViewAllContent>
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}
