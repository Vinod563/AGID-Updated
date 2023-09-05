import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Headermain } from "../../component/Headermain";
import { Footer } from "../../component/Footer";

export const Agid = () => {
  return (
    <div className="agid">
      <div className="div">
        <div className="frame">
          <div className="welcome">
            <div className="overlap-group">
              <div className="content">
                <div className="div-2">
                  <p className="text-wrapper">Aging, Independence, and Disability (AGID) Program Data Portal</p>
                  <div className="text-wrapper-2">Welcome to AGID 2.0</div>
                </div>
                <p className="p">
                  Our country is full of aging adults, and we love to tell their stories through data. The
                  Administration for Community Living (ACL) presents AGID as the source for official data on aging,
                  independence, and disability programs.
                </p>
              </div>
              <img className="couple" alt="Couple" src="/img/couple.png" />
            </div>
          </div>
          <div className="ACL-mission">
            <div className="frame-2">
              <img className="ACL-logo" alt="Acl logo" src="/img/acl-logo.png" />
              <div className="frame-3">
                <div className="text-wrapper">Our Mission</div>
                <p className="text-wrapper-3">
                  Maximize the independence, well-being, and health of older adults, people with disabilities across the
                  lifespan, and their families and caregivers.
                </p>
              </div>
            </div>
          </div>
          <div className="anchor-block">
            <div className="div-3">
              <div className="frame-4">
                <div className="text-wrapper-4">What is AGID?</div>
                <p className="text-wrapper-5">Your source of truth for Aging, Disability, Tribal and Census Data</p>
              </div>
              <p className="text-wrapper-6">
                The AGing, Independence, and Disability (AGID) Program Data Portal is an on-line query system based on
                ACL-related data files and surveys, and includes population characteristics from the Census Bureau for
                comparison purposes.
              </p>
            </div>
            <div className="anchors">
              <div className="points">
                <img className="icon" alt="Icon" src="/img/icon.svg" />
                <div className="content-2">
                  <div className="text-wrapper-7">Topic Navigator</div>
                  <p className="text-wrapper-8">Search for data using common topics and sub-topics</p>
                </div>
              </div>
              <div className="points-2">
                <img className="icon" alt="Icon" src="/img/icon-1.svg" />
                <div className="content-2">
                  <Link className="text-wrapper-7" to="/agid02">
                    Data Sets
                  </Link>
                  <p className="text-wrapper-8">
                    Cleaned, curated data derived from Program activities and measurement​
                  </p>
                </div>
              </div>
              <div className="points-2">
                <img className="icon" alt="Icon" src="/img/icon-2.svg" />
                <div className="content-2">
                  <div className="text-wrapper-7">Reports</div>
                  <p className="text-wrapper-8">Visualize data with interactive reports and Dashboards</p>
                </div>
              </div>
              <div className="points-3">
                <img className="icon" alt="Icon" src="/img/icon-3.svg" />
                <div className="content-2">
                  <div className="text-wrapper-7">Data Explorer</div>
                  <p className="text-wrapper-8">Create and export Custom Tables from Data Sets</p>
                </div>
              </div>
            </div>
          </div>
          <div className="news">
            <div className="release-notes">
              <div className="frame-5">
                <div className="frame-6">
                  <div className="text-wrapper-10">Release Notes</div>
                  <div className="card">
                    <div className="calendar">
                      <div className="group">
                        <div className="text-wrapper-11">SEP 23</div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-12">2023</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-3">
                      <p className="text-wrapper-13">Version 2.64: 2023 NSOAAP LTCOP</p>
                      <p className="this-release">
                        <span className="span">
                          This release featured the addition of the 14th National Survey of OAA Participants data.
                          Survey data are available in the Custom Tables section of AGID. Additional information related
                          to the data is available in the Data Files section of AGID.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="calendar">
                      <div className="group">
                        <div className="text-wrapper-11">SEP 23</div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-12">2023</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-3">
                      <p className="text-wrapper-13">Version 2.64: 2023 NSOAAP LTCOP</p>
                      <p className="this-release">
                        <span className="span">
                          This release featured the addition of the 14th National Survey of OAA Participants data.
                          Survey data are available in the Custom Tables section of AGID. Additional information related
                          to the data is available in the Data Files section of AGID.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="release-notes-2">
                  <div className="text-wrapper-14">Archives</div>
                  <p className="version">
                    Version 2.3: 2019 National Survey of Older Americans Act Participants
                    <br />
                    Version 2.1: 2019 Long-Term Care Ombudsman Programs
                    <br />
                    Version 1.9: 2019 National Survey of Older Americans Act Participants
                    <br />
                    Version 2.1: 2019 Long-Term Care Ombudsman Programs
                    <br />
                    Version 1.9: 2019 National Survey of Older Americans Act Participants
                    <br />
                    Version 1.9: 2019 National Survey of Older Americans Act Participants
                  </p>
                  <div className="arrow-link-wrapper">
                    <div className="arrow-link">
                      <div className="view-all-programs">View All Release Notes</div>
                      <div className="vector-wrapper">
                        <img className="vector" alt="Vector" src="/img/vector.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topics-FPO">
            <div className="left">
              <div className="title">
                <div className="text-wrapper-15">Topic Navigator</div>
                <div className="text-wrapper-16">Search by Topic</div>
              </div>
              <div className="flexcontainer">
                <p className="div-4">
                  <span className="text-wrapper-17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi
                    molestie, non porta augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    sagittis lectus eget nisi molestie, non porta augue.. <br />
                  </span>
                </p>
                <p className="div-4">
                  <span className="text-wrapper-17">
                    The AGing, Independence, and Disability (AGID) Program Data Portal is an on-line query system based
                    on ACL-related data files and surveys, and includes population characteristics from the Census
                    Bureau for comparison purposes. Data Portal is an on-line query system based on ACL-related data
                    files and surveys, and includes population characteristics from the Census Bureau for comparison
                    purposes.
                  </span>
                </p>
              </div>
              <div className="button-big">
                <button className="button">Search by Topic</button>
              </div>
            </div>
            <img className="image" alt="Image" src="/img/image.png" />
          </div>
          <div className="how-it-works">
            <div className="frame-7">
              <div className="div-2">
                <div className="text-wrapper-15">Custom Queries</div>
                <div className="text-wrapper-16">Data Explorer</div>
              </div>
              <p className="text-wrapper-18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie,
                non porta augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus
                eget nisi molestie, non porta augue..
              </p>
              <div className="button-big">
                <button className="button">Create a Custom Table</button>
              </div>
            </div>
          </div>
          <div className="data-sets">
            <div className="content-4">
              <div className="column">
                <div className="title-and-blurb">
                  <div className="title-2">
                    <div className="text-wrapper-19">Source Data</div>
                    <div className="text-wrapper-20">AGID Data Sets</div>
                  </div>
                  <p className="an-explanation-of">
                    <span className="text-wrapper-17">
                      An explanation of how to use the Data Products below. The Administration for Community Living
                      (ACL) oversees Administration on Aging (AoA) programs and conducts the National Survey of Older
                      Americans Act (OAA) Participants.
                    </span>
                  </p>
                  <Link className="button-big" to="/agid02">
                    <p className="button-2">Learn More About Data Sets</p>
                  </Link>
                </div>
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <p className="american-community">American Community Survey (ACS) Demographic Data</p>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <p className="text-wrapper-24">American Community Survey (ACS) Special Tabulations on Aging</p>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-2">
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <p className="american-community">Title III: State Performance Reports (SPR)</p>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <p className="american-community">
                      Title VI:American Indian, Alaskan Native, and Native Hawaiian PPR
                    </p>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <p className="american-community">
                      Title VII National Ombudsman
                      <br />
                      Reporting System (NORS)
                    </p>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-2">
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <p className="american-community">Centers for Independent Living Program PPR</p>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <div className="american-community">State Performance Reports (SPR)</div>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="datasets">
                  <div className="div-2">
                    <div className="text-wrapper-21">Dataset</div>
                    <p className="american-community">State Independent Living Services Program PPR</p>
                  </div>
                  <p className="text-wrapper-22">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Data Set</div>
                    <div className="icon-wrapper">
                      <div className="img-wrapper">
                        <img className="img" alt="Vector" src="/img/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="state-profile">
            <img className="US-map" alt="Us map" src="/img/us-map.png" />
            <div className="left-2">
              <div className="title">
                <div className="text-wrapper-15">State Data</div>
                <div className="text-wrapper-25">State Profiles</div>
              </div>
              <p className="div-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie,
                non porta augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus
                eget nisi molestie, non porta augue..
              </p>
              <div className="button-wrapper">
                <button className="button-3">Search by Topic</button>
              </div>
            </div>
          </div>
          <div className="AGID-in-action">
            <div className="div-3">
              <div className="frame-8">
                <div className="text-wrapper-19">Reports &amp; Dashboards</div>
                <div className="text-wrapper-26">AGID in Action</div>
              </div>
              <p className="span-wrapper">
                <span className="text-wrapper-17">
                  An explanation of how to use the Data Products below. The Administration for Community Living (ACL)
                  oversees Administration on Aging (AoA) programs and conducts the National Survey of Older Americans
                  Act (OAA) Participants.
                </span>
              </p>
              <div className="button-wrapper">
                <button className="button-3">View All Data Products</button>
              </div>
            </div>
            <div className="frame-9">
              <div className="data-product">
                <div className="frame-10">
                  <div className="top-heading">
                    <div className="text-wrapper-27">AGING</div>
                    <img className="vector-2" alt="Vector" src="/img/vector-4-1.svg" />
                    <div className="text-wrapper-28">SPR</div>
                  </div>
                  <div className="chart">
                    <div className="chart-and-title">
                      <p className="text-wrapper-29">
                        Congregate meals and home-delivered meals served between 2017 and 2018 in Oklahoma
                      </p>
                      <div className="image-wrapper">
                        <img className="image-2" alt="Image" src="/img/image-4.png" />
                      </div>
                      <div className="ACL-logo-and-text">
                        <p className="lorem-ipsum-dolor">
                          <span className="text-wrapper-30">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi
                            molestie, non porta augue feugiat. Donec ac ligula nec nulla faucibus elementum. Integer at
                            elementum mi. Nunc ligula est, commodo at ornare accumsan, luctus vel elit.{" "}
                          </span>
                          <span className="text-wrapper-31">Custom link looks like this.</span>
                        </p>
                        <img className="ACL-logo-2" alt="Acl logo" src="/img/acl-logo-1.png" />
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="div-2">
                      <p className="text-wrapper-32">Case Study | Data Comparrison</p>
                      <p className="text-wrapper-33">
                        2013-2015 Title III and Title VI Congregate Delivered Meals Served
                      </p>
                    </div>
                    <p className="text-wrapper-34">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident.Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Case Study</div>
                    <div className="icon-2" />
                  </div>
                </div>
              </div>
              <div className="data-product">
                <div className="frame-10">
                  <div className="top-heading">
                    <div className="text-wrapper-27">AGING</div>
                    <img className="vector-2" alt="Vector" src="/img/vector-4-1.svg" />
                    <div className="text-wrapper-28">SPR</div>
                  </div>
                  <div className="chart">
                    <div className="chart-and-title">
                      <p className="text-wrapper-29">
                        Congregate meals and home-delivered meals served between 2017 and 2018 in Oklahoma
                      </p>
                      <div className="image-wrapper">
                        <img className="image-2" alt="Image" src="/img/image-4.png" />
                      </div>
                      <div className="ACL-logo-and-text">
                        <p className="lorem-ipsum-dolor">
                          <span className="text-wrapper-30">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi
                            molestie, non porta augue feugiat. Donec ac ligula nec nulla faucibus elementum. Integer at
                            elementum mi. Nunc ligula est, commodo at ornare accumsan, luctus vel elit.{" "}
                          </span>
                          <span className="text-wrapper-31">Custom link looks like this.</span>
                        </p>
                        <img className="ACL-logo-2" alt="Acl logo" src="/img/acl-logo-1.png" />
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="div-2">
                      <p className="text-wrapper-32">Case Study | Data Comparrison</p>
                      <p className="text-wrapper-33">
                        2013-2015 Title III and Title VI Congregate Delivered Meals Served
                      </p>
                    </div>
                    <p className="text-wrapper-34">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident.Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Case Study</div>
                    <div className="icon-2" />
                  </div>
                </div>
              </div>
              <div className="data-product">
                <div className="frame-10">
                  <div className="top-heading">
                    <div className="text-wrapper-27">AGING</div>
                    <img className="vector-2" alt="Vector" src="/img/vector-4-1.svg" />
                    <div className="text-wrapper-28">SPR</div>
                  </div>
                  <div className="chart">
                    <div className="chart-and-title">
                      <p className="text-wrapper-29">
                        Congregate meals and home-delivered meals served between 2017 and 2018 in Oklahoma
                      </p>
                      <div className="image-wrapper">
                        <img className="image-2" alt="Image" src="/img/image-4-2.png" />
                      </div>
                      <div className="ACL-logo-and-text">
                        <p className="lorem-ipsum-dolor">
                          <span className="text-wrapper-30">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi
                            molestie, non porta augue feugiat. Donec ac ligula nec nulla faucibus elementum. Integer at
                            elementum mi. Nunc ligula est, commodo at ornare accumsan, luctus vel elit.{" "}
                          </span>
                          <span className="text-wrapper-31">Custom link looks like this.</span>
                        </p>
                        <img className="ACL-logo-2" alt="Acl logo" src="/img/acl-logo-1.png" />
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="div-2">
                      <p className="text-wrapper-32">Case Study | Data Comparrison</p>
                      <p className="text-wrapper-33">
                        2013-2015 Title III and Title VI Congregate Delivered Meals Served
                      </p>
                    </div>
                    <p className="text-wrapper-34">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident.Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                    </p>
                  </div>
                  <div className="arrow-link">
                    <div className="text-wrapper-23">View Case Study</div>
                    <div className="icon-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        <Headermain/>
      </div>
    </div>
  );
};
