import React from "react";
import { NavLink } from "react-router-dom";

const HeaderHome = () => {
  return (
    <nav className="navbar navbar-expand-sm d-block">
      <div className="d-flex flex-row bg-dark justify-content-between align-item-center">
        <div className="m-2 navbar-dark bg-dark d-flex align-items-center">
          <NavLink className="navbar-brand" to="/">
            <img
              width={100}
              height={30}
              src="/image/logo_cyber.png"
              alt="..."
            />
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </div>
        <form className="d-flex my-2 my-lg-0">
          <NavLink
            className="text-white mx-2 my-3 "
            to="/"
            style={{ textDecoration: "none" }}
          >
            <i class="fa-solid fa-magnifying-glass"></i> Search
          </NavLink>
          <NavLink
            className="text-white mx-2 my-3"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <i className="fa fa-cart-plus fs-1"></i>(1)
          </NavLink>
          <NavLink
            className="text-white mx-2 my-3"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Login
          </NavLink>
          <NavLink
            className="text-white mx-2 my-3"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Register
          </NavLink>
        </form>
      </div>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Men
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Woman
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Kid
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Sport
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderHome;
