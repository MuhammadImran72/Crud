import React from "react";

class ViewAllContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentinfomation: this.props.viewstudents,
      ViewCourseArray: this.props.viewcourse,
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p>{this.state.studentinfomation.username}</p>
              <h5>
                {" "}
                {this.state.ViewCourseArray.map((user, index) => {
                  return (
                    <ul key={index}>
                      <li>{user.subject}</li>
                    </ul>
                  );
                })}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewAllContent;
