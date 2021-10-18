import React from "react";
import { Link } from "react-router-dom";

const NotFoundError = () => {
  return (
    <div>
      <div>
        <img className="d-block mx-auto" src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-warning px-3 fs-5">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundError;
