import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Settings</title>
      </Helmet>
      <div className="container mt-14 p-4">
        <h1 className="text-3xl">
          <i className="fa-solid fa-circle-arrow-right text-main me-3"></i>
          Settings :
        </h1>
        <div className="p-4">
          <Link to={"/updatepass"}>
            <h2 className="text-2xl hover:text-main cursor-pointer">
              <i className="fa-solid fa-circle-arrow-right text-main me-3"></i>
              Update your password
            </h2>
          </Link>
          <Link to={"/updatedata"}>
            <h2 className="text-2xl mt-4 hover:text-main cursor-pointer">
              <i className="fa-solid fa-circle-arrow-right text-main me-3 "></i>
              Update your data
            </h2>
          </Link>
          <Link to={"/allorders"}>
            <h2 className="text-2xl mt-4 hover:text-main cursor-pointer">
              <i className="fa-solid fa-circle-arrow-right text-main me-3 "></i>
              Show your all orders
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
