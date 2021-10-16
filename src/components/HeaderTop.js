import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderTop.css";
import { Container } from "react-bootstrap";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <Container>
        <div className="header-top-container">
          <div className="ht-contact">
            <ul>
              <li>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </span>
                  +880 1642 499 366
                </p>
              </li>
              <li className="divider">
                <p>|</p>
              </li>
              <li>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  info@wiseruni.edu
                </p>
              </li>
            </ul>
          </div>
          <div className="ht-auth">
            <ul>
              <li>
                <Link to="/">
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  Account
                </Link>
              </li>
              <li className="divider">
                <p>|</p>
              </li>
              <li>
                <Link to="/">
                  <span>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </span>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
