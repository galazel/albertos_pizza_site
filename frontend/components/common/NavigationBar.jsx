import React, { useState } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";

export default function NavigationBar() 
{
  const nav = useNavigate()
  const handleLogin = () =>
  {
     const token = localStorage.getItem('token')
     if(true) nav('/login')
  }

  return (
    <nav className="grid grid-rows-2">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          <div className="col-md-3 mb-2 mb-md-0 d-flex gap-3">
            {/* ✅ Social Media Icons */}
            <FontAwesomeIcon icon={faTwitter} color="white" />
            <FontAwesomeIcon icon={faFacebook} color="white" />
            <FontAwesomeIcon icon={faInstagram} color="white" />
          </div>
          <h1 className="font-cursive text-5xl text-white">The Pizzeria</h1>
          <div className="col-md-3 text-end">
            <button
              type="button"
              className="btn border-white text-white me-2 hover:bg-red-700"
              onClick={handleLogin}
            >
              ORDER ONLINE
            </button>
          </div>
        </header>
      </div>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pill">
            <li className="nav-item border-y-2 border-transparent hover:border-red-700 hover:border-y-2">
              <Link
                to="/"
                className="nav-link  text-white "
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item border-y-2 border-transparent hover:border-red-700 hover:border-y-2">
              <Link to="/menu" className="nav-link text-white ">
                OUR MENU
              </Link>
            </li>
            <li className="nav-item border-y-2 border-transparent hover:border-red-700 hover:border-y-2">
              <Link to="/about" className="nav-link text-white ">
                ABOUT
              </Link>
            </li>
            <li className="nav-item border-y-2 border-transparent hover:border-red-700 hover:border-y-2">
              <Link to="/offers" className="nav-link text-white ">
                OFFERS
              </Link>
            </li>
            <li className="nav-item border-y-2 border-transparent hover:border-red-700 hover:border-y-2">
              <Link to="/contact" className="nav-link text-white ">
                CONTACT
              </Link>
            </li>
          </ul>
        </header>
      </div>

    </nav>
  );
}
