import React from "react";
import { Link } from "react-router-dom";
import "../../src/assets/css/Header.css";

export default function Header() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h2 className="text-center"> Information System </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1 d-flex justify-content-around p-2">
            <Link className="btn-success p-2" to="AddStudentInfo">
              {" "}
              Add
            </Link>
            <Link className="btn-danger  p-2"> Close</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
