import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Footer2 } from "../../component/Footer2";

export const AgidScreen = () => {
  return (
    <div className="agid-screen">
      <div className="agid-2">
        <div className="frame-20">
          <div className="filter-and-table">
            <div className="component-frame">
              <div className="side-section">
                <div className="filter-set-horiz">
                  <div className="data-filter-headings">
                    <div className="text-wrapper-55">Data Explorer</div>
                    <p className="text-wrapper-56">Use the filters to create a custom query.</p>
                  </div>
                  <div className="div-5">
                    <div className="data-filter-headings">
                      <div className="text-wrapper-57">Select Data Set</div>
                      <p className="text-wrapper-58">Use the filters to select a Data Set</p>
                    </div>
                    <div className="filter-horiz">
                      <div className="frame-21">
                        <div className="text-wrapper-59">Data Set(s)</div>
                        <div className="text-wrapper-59">[1]</div>
                      </div>
                      <img className="icon-5" alt="Icon" src="/img/icon-12.svg" />
                    </div>
                    <div className="topic-wrapper">
                      <div className="topic">
                        <div className="text-wrapper-60">State Performance Reports (SPR)</div>
                        <img className="icon-6" alt="Icon" src="/img/icon-13.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="div-5">
                    <div className="data-filter-headings">
                      <div className="text-wrapper-57">Select Years</div>
                      <p className="text-wrapper-58">Use the filters to select year(s)</p>
                    </div>
                    <Link className="filter-horiz-2" to="/agid05">
                      <div className="text-wrapper-61">Year(s)</div>
                      <img className="icon-5" alt="Icon" src="/img/icon-14.svg" />
                    </Link>
                  </div>
                  <div className="div-5">
                    <div className="data-filter-headings">
                      <div className="text-wrapper-57">Select States &amp; Territories</div>
                      <p className="text-wrapper-58">Use the filters to select States &amp; Territories</p>
                    </div>
                    <div className="filter-horiz-3">
                      <div className="states-territories">States &amp; Territories</div>
                      <img className="icon-5" alt="Icon" src="/img/icon-14.svg" />
                    </div>
                  </div>
                  <div className="div-6">
                    <div className="button-big-icon">
                      <div className="text-wrapper-62">Run Query</div>
                      <img className="icon-7" alt="Icon" src="/img/icon-16.svg" />
                    </div>
                    <div className="text-wrapper-63">Clear All Selections</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-22">
              <div className="fjg">
                <div className="arrow-link-2">
                  <div className="icon-8">
                    <img className="icon-9" alt="Icon" src="/img/icon-17.svg" />
                  </div>
                  <div className="text-wrapper-64">Back to Page View</div>
                </div>
                <div className="save-bar">
                  <div className="frame-23">
                    <div className="button-big-icon-wrapper">
                      <div className="button-big-icon-2">
                        <div className="text-wrapper-65">Table</div>
                        <img className="icon-7" alt="Icon" src="/img/icon-18.svg" />
                      </div>
                    </div>
                    <div className="button-big-icon-3">
                      <div className="text-wrapper-66">Visualizations</div>
                      <img className="icon-7" alt="Icon" src="/img/icon-19.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-24">
                <div className="data-table-wrapper">
                  <div className="data-table">
                    <div className="div-7">
                      <div className="category">
                        <div className="cell">
                          <div className="frame-25">
                            <div className="frame-26">
                              <img className="icon-5" alt="Icon" src="/img/icon-21.svg" />
                              <div className="text-wrapper-67">States</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                          </div>
                        </div>
                        <div className="cell-2">
                          <div className="frame-27">
                            <div className="frame-28">
                              <div className="text-wrapper-67">Year(s)</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-22.svg" />
                          </div>
                        </div>
                        <div className="cell">
                          <div className="frame-25">
                            <div className="frame-26">
                              <img className="icon-5" alt="Icon" src="/img/icon-21.svg" />
                              <div className="text-wrapper-67">Data Element Name</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                          </div>
                        </div>
                        <div className="cell">
                          <div className="frame-25">
                            <div className="frame-26">
                              <img className="icon-5" alt="Icon" src="/img/icon-21.svg" />
                              <div className="text-wrapper-67">Data Element Name</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                          </div>
                        </div>
                        <div className="cell">
                          <div className="frame-25">
                            <div className="frame-26">
                              <img className="icon-5" alt="Icon" src="/img/icon-21.svg" />
                              <div className="text-wrapper-67">Data Element Name</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                          </div>
                        </div>
                        <div className="cell">
                          <div className="frame-25">
                            <div className="frame-26">
                              <img className="icon-5" alt="Icon" src="/img/icon-21.svg" />
                              <div className="text-wrapper-67">Data Element Name</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-29.svg" />
                          </div>
                        </div>
                        <div className="cell">
                          <div className="frame-25">
                            <div className="frame-26">
                              <img className="icon-5" alt="Icon" src="/img/icon-32.png" />
                              <div className="text-wrapper-67">Data Element Name</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                          </div>
                        </div>
                        <div className="cell">
                          <div className="frame-25">
                            <div className="frame-26">
                              <img className="icon-5" alt="Icon" src="/img/icon-32.png" />
                              <div className="text-wrapper-67">Data Element Name</div>
                            </div>
                            <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                          </div>
                        </div>
                      </div>
                      <div className="div-7">
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">USA - All States</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2020</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">USA - All States</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">USA - All States</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2022</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">USA - All States</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Alabama</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2020</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Alabama</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Alabama</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2022</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Alabama</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Alaska</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2020</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Alaska</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Alaska</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2022</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Alaska</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Arizona</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2020</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Arizona</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Arizona</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2022</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Arizona</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Arkansas</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Arkansas</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Arkansas</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-20.svg" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-71">Arkansas</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">California</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Colorado</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-3">
                            <div className="text-wrapper-68">Connecticut</div>
                          </div>
                          <div className="cell-4">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="single-entry-wrapper">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Delaware</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-8">
                          <div className="cell-5">
                            <div className="text-wrapper-68">Wyoming</div>
                          </div>
                          <div className="cell-6">
                            <div className="frame-25">
                              <div className="text-wrapper-69">2023</div>
                              <img className="icon-5" alt="Icon" src="/img/icon-31.png" />
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                          <div className="cell-7">
                            <div className="single-entry">
                              <div className="text-wrapper-70">Data</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer2/>
          <div className="footer-2">
            <div className="frame-29">
              <div className="frame-30">
                <div className="button-big-icon-4">
                  <div className="text-wrapper-72">Definitions</div>
                  <img className="icon-10" alt="Icon" src="/img/icon-60.svg" />
                </div>
                <div className="button-big-icon-4">
                  <div className="text-wrapper-62">Meta Data</div>
                  <img className="icon-7" alt="Icon" src="/img/icon-60.svg" />
                </div>
              </div>
              <div className="frame-31">
                <button className="button-big-icon-5">
                  <div className="text-wrapper-62">Download</div>
                  <img className="icon-7" alt="Icon" src="/img/icon-60.svg" />
                </button>
                <button className="button-big-icon-5">
                  <div className="text-wrapper-62">Share</div>
                  <img className="icon-7" alt="Icon" src="/img/icon-63.svg" />
                </button>
              </div>
            </div>
            <div className="footer-3">
              <div className="primary-links-2">
                <div className="footer-primary-link-2">
                  <div className="text-wrapper-73">Legal</div>
                </div>
                <div className="footer-primary-link-2">
                  <div className="text-wrapper-73">Accessibility</div>
                </div>
                <div className="footer-primary-link-2">
                  <div className="text-wrapper-73">Privacy</div>
                </div>
                <div className="footer-primary-link-2">
                  <div className="text-wrapper-73">Cookies</div>
                </div>
                <div className="footer-primary-link-2">
                  <div className="text-wrapper-73">Account</div>
                </div>
              </div>
              <div className="ACL-2">
                <div className="logo-block-3">
                  <img className="ACL-logo-5" alt="Acl logo" src="/img/acl-logo-4.png" />
                  <div className="AGID-title-3">
                    <div className="text-wrapper-74">Administration for Community Living</div>
                    <p className="text-wrapper-75">Aging, Independence, and Disability (AGID) Program Data Portal</p>
                  </div>
                </div>
                <div className="div-6">
                  <img className="socials-2" alt="Socials" src="/img/socials-1.svg" />
                  <div className="agency-contact-2">
                    <div className="text-wrapper-76">Contact Us</div>
                    <div className="group-5">
                      <div className="frame-32">
                        <div className="text-wrapper-77">(202) 401-4634</div>
                        <div className="text-wrapper-77">info@acl.gov</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-map-2">
                <div className="frame-33">
                  <div className="column-4">
                    <div className="discover-2">
                      <div className="text-wrapper-78">About AGID</div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-6">Introduction Video</div>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-6">Tutorials</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-34">
                  <div className="column-4">
                    <div className="column-4">
                      <div className="column-5">
                        <div className="discover-2">
                          <div className="text-wrapper-78">Programs</div>
                          <div className="footer-link-wrapper">
                            <div className="footer-link-7">All Programs</div>
                          </div>
                          <div className="footer-link-wrapper">
                            <div className="footer-link-8">Center for Independent Living</div>
                          </div>
                          <div className="footer-link-wrapper">
                            <div className="footer-link-7">Independent Living Services</div>
                          </div>
                          <div className="footer-link-wrapper">
                            <p className="footer-link-7">Title III - State Programs</p>
                          </div>
                          <div className="footer-link-wrapper">
                            <p className="footer-link-7">Title VI - Native Americans</p>
                          </div>
                          <div className="footer-link-wrapper">
                            <p className="footer-link-7">Title VII - Long Term Care Ombudsman</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-35">
                  <div className="column-4">
                    <div className="discover-2">
                      <div className="text-wrapper-78">Topics</div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-8">Topic Navigator</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-34">
                  <div className="column-4">
                    <div className="column-4">
                      <div className="discover-2">
                        <div className="text-wrapper-79">Data</div>
                        <div className="footer-link-wrapper">
                          <div className="footer-link-9">About&nbsp;&nbsp;the Data</div>
                        </div>
                        <div className="footer-link-wrapper">
                          <p className="footer-link-9">How to Use AGID Data</p>
                        </div>
                        <div className="footer-link-wrapper">
                          <div className="footer-link-9">Data Products</div>
                        </div>
                        <div className="footer-link-wrapper">
                          <div className="footer-link-9">Data Sets</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-35">
                  <div className="column-4">
                    <div className="discover-2">
                      <div className="text-wrapper-78">Data Tools</div>
                      <div className="footer-link-wrapper">
                        <p className="footer-link-9">How to Use Data Tools</p>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-9">Compare Data</div>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-9">Data Maps</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-35">
                  <div className="column-4">
                    <div className="discover-2">
                      <div className="text-wrapper-78">New &amp; Resources</div>
                      <div className="footer-link-wrapper">
                        <p className="footer-link-7">News / Briefs / Fact Sheets</p>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-7">Release Notes</div>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-7">Tutorials</div>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-7">Webinars</div>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-7">FAQ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="identifier-default-2">
                <div className="frame-36">
                  <div className="frame-37">
                    <div className="text-wrapper-80">acl.gov</div>
                    <p className="text-wrapper-81">
                      An official website of the ACL | Administration for Community Living
                    </p>
                  </div>
                  <div className="div-8">
                    <div className="frame-38">
                      <div className="text-wrapper-82">About ACL</div>
                      <div className="text-wrapper-83">Accessibility support</div>
                    </div>
                    <div className="frame-38">
                      <div className="text-wrapper-82">FOIA requests</div>
                      <div className="text-wrapper-83">No FEAR Act data</div>
                    </div>
                    <div className="frame-38">
                      <p className="text-wrapper-82">Office of the Inspector General</p>
                      <div className="text-wrapper-83">Performance reports</div>
                    </div>
                    <div className="text-wrapper-82">Privacy Policy</div>
                  </div>
                  <p className="looking-for-u-s-2">
                    <span className="text-wrapper-84">
                      Looking for U.S. government information and services?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="text-wrapper-85">Visit USA.gov</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mini-menu">
          <div className="main-menu-2">
            <div className="menu-2">
              <div className="text-wrapper-86">AGID Data Explorer</div>
              <Link className="nav-link-4" to="/agid01">
                <div className="frame-39">
                  <div className="text-wrapper-87">Home</div>
                </div>
              </Link>
              <div className="group-6">
                <div className="nav-link-5">
                  <div className="frame-39">
                    <div className="text-wrapper-87">Release Notes</div>
                  </div>
                </div>
              </div>
              <div className="nav-link-4">
                <div className="frame-39">
                  <div className="text-wrapper-87">Search by Topics</div>
                  <img className="icon-6" alt="Icon" src="/img/icon-64.svg" />
                </div>
              </div>
              <div className="nav-link-4">
                <div className="frame-39">
                  <div className="text-wrapper-87">Data Explorer</div>
                </div>
              </div>
              <div className="nav-link-4">
                <div className="frame-39">
                  <div className="text-wrapper-87">Reports</div>
                  <img className="icon-6" alt="Icon" src="/img/icon-64.svg" />
                </div>
              </div>
              <div className="group-7">
                <div className="nav-link-5">
                  <div className="frame-39">
                    <div className="text-wrapper-87">Resources</div>
                    <img className="icon-6" alt="Icon" src="/img/icon-64.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
