import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";

export const Headermain = () => {
  return (
    <div className="header-comp">
          <div className="top-banner">
            <div className="banner-content">
              <img className="us-flag-small" alt="Us flag small" src="/img/us-flag-small.png" />
              <div className="content-5">
                <p className="text-wrapper-48">An official website of the United States government</p>
                <div className="here-s-how-you-know">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-49">Here’s how you know</div>
                    <img className="icon-3" alt="Icon" src="/img/icon-7.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-menu">
            <div className="right-side-menu">
              <div className="nav-link">
                <div className="frame-18">
                  <div className="text-wrapper-50">Help</div>
                </div>
              </div>
              <div className="nav-link">
                <div className="frame-18">
                  <div className="text-wrapper-50">Contact Us</div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-and-search">
            <div className="logo-block-2">
              <img className="ACL-logo-4" alt="Acl logo" src="/img/acl-logo-5.png" />
              <div className="AGID-title-2">
                <div className="text-wrapper-51">Administration for Community Living</div>
                <p className="text-wrapper-52">Aging, Independence, and Disability (AGID) Data Portal</p>
              </div>
            </div>
            <div className="spacer" />
            <div className="quick-search">
              <div className="text-wrapper-53">Quick Search</div>
              <img className="search" alt="Search" src="/img/search.svg" />
            </div>
          </div>
          <div className="main-menu">
            <img className="line" alt="Line" src="/img/line.svg" />
            <img className="line" alt="Line" src="/img/line-1.svg" />
            <div className="main-menu">
              <img className="line" alt="Line" src="/img/line.svg" />
              <img className="line" alt="Line" src="/img/line-1.svg" />
              <div className="main-menu">
                <img className="line" alt="Line" src="/img/line.svg" />
                <div className="menu-wrapper">
                  <div className="menu">
                    <Link className="nav-link-2" to="/agid01">
                      <div className="frame-19">
                        <div className="text-wrapper-54">Home</div>
                      </div>
                    </Link>
                    <div className="group-3">
                      <div className="nav-link-3">
                        <div className="frame-19">
                          <div className="text-wrapper-54">Release Notes</div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-link-2">
                      <div className="frame-19">
                        <div className="text-wrapper-54">Search by Topics</div>
                        <img className="icon-4" alt="Icon" src="/img/icon-8.svg" />
                      </div>
                    </div>
                    <Link className="nav-link-2" to="/agid02">
                      <div className="frame-19">
                        <div className="text-wrapper-54">Data Sets</div>
                        <img className="icon-4" alt="Icon" src="/img/icon-8.svg" />
                      </div>
                    </Link>
                    <Link className="nav-link-2" to="/agid04">
                      <div className="frame-19">
                        <div className="text-wrapper-54">Data Explorer</div>
                      </div>
                    </Link>
                    <div className="nav-link-2">
                      <div className="frame-19">
                        <div className="text-wrapper-54">Reports</div>
                        <img className="icon-4" alt="Icon" src="/img/icon-8.svg" />
                      </div>
                    </div>
                    <div className="group-4">
                      <div className="nav-link-3">
                        <div className="frame-19">
                          <div className="text-wrapper-54">Resources</div>
                          <img className="icon-4" alt="Icon" src="/img/icon-8.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="line-2" alt="Line" src="/img/line-1.svg" />
              </div>
            </div>
          </div>
    </div>
  );
};