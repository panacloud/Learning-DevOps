/*eslint-disable*/

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../assets/Logo.svg";
// import { Link } from "react-router-dom";
import { Link } from "gatsby"
import "./Navbar.css"

class Navbar extends Component {
  state = {
    navRoutes: {
      home: false,
      about: false,
      contact: false,
      apply: false,
      availpro: false,
      hiw: false
    },
    condition: false,
    right: false,
    height_35: true
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  hideModal = () => {
    this.setState({ condition: false });
  };
  changePage = routeName => {
    this.props.history.push(routeName);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  catd() {
    var div = document.getElementById("nav-flex-ul");
    var style = getComputedStyle(div);
    var state = style.getPropertyValue("display");
    if (state == "none") {
      div.style.display = "block";
      this.setState({ height_35: false });
    } else if (state == "block") {
      div.style.display = "none";
      this.setState({ height_35: true });
    } else if (state == "flex") {
      div.style.display = "none";
      this.setState({ height_35: true });
    }
  }

  render() {
    const { condition, height_35 } = this.state;
    return (
      <div data-aos="fade-down" data-aos-delay="0s" className="navbar">
        <div className="container">
          <div className="navbar_cont">
            <div className={`navbar-flex nav-flex-1 ${height_35 ? "navbar-flex-height_35" : "navbar-flex-height_auto"}`}>
              <Link to="/">
                <img
                  className="Navbar-logo-piaic"
                  src={logo}
                />
              </Link>

              <div className="hamb-btn">
                <img
                  onClick={() => {
                    this.catd();
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC7SURBVGhD7djdCcJAEEXhaAWxFRvSYqwhYCu2YBGKhex6B+7rEJ+ScTkfzNssHMmPkAkAAIys937UXFtri+ZebJZoi0bn5rR802Jp0ejcnJae3i8rGp2bG+aKaO+gKfuMaC7R6FwAQFF6V8+aU7GZnbdOfzhnzUeHSlLbOxqdm9PSw2fKikbn5kb6IXFrvXymnGiLRueu05n/ftgBALvQu5oPdFuJRufmtMQHuq38dEW0xwc6AACwq2n6AiwYumzclQgXAAAAAElFTkSuQmCC"
                />
              </div>
            </div>
            <div className="navbar-flex nav-flex-2" />
            <div className="navbar-flex nav-flex-3">
              <ul id="nav-flex-ul">
                <Link to="/certification">
                  {" "}
                  <li
                    className={(window.location.pathname.indexOf("certification") == 1) ? "active-color" : ""}
                    onClick={() => {
                      this.scrollTop();
                      this.catd();
                    }}
                  >
                    <span
                      className="d-block"
                      data-aos="fade-left"
                      data-aos-delay="2000"
                    > Certifications </span>
                  </li>
                </Link>

                <Link to="/course">
                  {" "}
                  <li
                    className={(window.location.pathname.indexOf("course") == 1) ? "active-color" : ""}
                    onClick={() => {
                      this.scrollTop();
                      this.catd();
                    }}
                  >
                    <span
                      className="d-block"
                      data-aos="fade-left"
                      data-aos-delay="2000"
                    > Courses </span>
                  </li>
                </Link>

                <Link to="/franchisee">
                  {" "}
                  <li
                    className={(window.location.pathname.indexOf("franchisee") == 1) ? "active-color" : ""}
                    onClick={() => {
                      this.scrollTop();
                      this.catd();
                    }}
                  >
                    <span
                      className="d-block"
                      data-aos="fade-left"
                      data-aos-delay="2000"
                    > Franchisee </span>
                  </li>
                </Link>

                <Link to="/program">
                  {" "}
                  <li
                    className={(window.location.pathname.indexOf("program") == 1) ? "active-color" : ""}
                    onClick={() => {
                      this.scrollTop();
                      this.catd();
                    }}
                  >
                    <span
                      className="d-block"
                      data-aos="fade-left"
                      data-aos-delay="2000"
                    > Program </span>
                  </li>
                </Link>

                <Link to="/track">
                  {" "}
                  <li
                    className={(window.location.pathname.indexOf("track") == 1) ? "active-color" : ""}
                    onClick={() => {
                      this.scrollTop();
                      this.catd();
                    }}
                  >
                    <span
                      className="d-block"
                      data-aos="fade-left"
                      data-aos-delay="2000"
                    > Track </span>
                  </li>
                </Link>

                <Link to="/programCatalog">
                  {" "}
                  <li
                    className={(window.location.pathname.indexOf("/programCatalog") == 1) ? "active-color" : ""}
                    onClick={() => {
                      this.scrollTop();
                      this.catd();
                    }}
                  >
                    <span
                      className="d-block"
                      data-aos="fade-left"
                      data-aos-delay="2000"
                    > Program Catalog </span>
                  </li>
                </Link>

                <Link to="/textbook">
                  {" "}
                  <li
                    className={(window.location.pathname.indexOf("textbook") == 1) ? "active-color" : ""}
                    onClick={() => {
                      this.scrollTop();
                      this.catd();
                    }}
                  >
                    <span
                      className="d-block"
                      data-aos="fade-left"
                      data-aos-delay="2000"
                    > Text Books </span>
                  </li>
                </Link>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;