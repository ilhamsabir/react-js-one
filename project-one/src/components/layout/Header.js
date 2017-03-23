// import React, { Component } from 'react';
import React from "react";

class Header extends React.Component {
  render() {
      return (
       <div className="clearfix">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
              </div>
              <div className="" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"></li>
                  <li className="active"></li>
                  <li className="active"></li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;
