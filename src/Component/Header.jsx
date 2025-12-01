import React from "react";
import pic from "../assets/logo.jpeg";
import Add from "./Add";
import { Link, Links } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-lg"
        style={{background: "linear-gradient(90deg, #ff7a00, #ffbb33, #ffda79)",}}>
        <div className="container-fluid d-flex justify-content-between align-items-center py-2">

          <div className="d-flex align-items-center">
            <img src={pic} alt="Logo" className="rounded-circle me-3 shadow"style={{width: "200px",  height: "100px", border: "3px solid white",  }} />
            <h2 className="fw-bold ms-5 text-white">

              CHOCO-BERRYY CREAMS
            </h2>
          </div>

          <div className="d-flex">
            <Link className="btn btn-light me-3 px-4 py-2 rounded-pill shadow-sm fw-semibold"  style={{ color: "#ff7a00" }} to='add-product' >
              Add Product
            </Link>

            <Link className="btn btn-outline-light px-4 py-2 rounded-pill shadow-sm fw-semibold" to='view-product'>
              View Product
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
