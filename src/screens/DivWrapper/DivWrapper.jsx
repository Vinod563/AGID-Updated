import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Headermain } from "../../component/Headermain";
import { Footer } from "../../component/Footer";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="agid-3">
        <div className="frame-40">
          <div className="splash">
            <div className="content-6">
              <div className="frame-41">
                <div className="text-wrapper-88">About AGID Data Sets</div>
                <p className="text-wrapper-89">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                  a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod
                  ve semper.
                </p>
              </div>
              <p className="text-wrapper-90">Each data set description contains the following information:</p>
              <div className="frame-42">
                <div className="frame-43">
                  <div className="frame-44">
                    <div className="text-wrapper-91">Usage Guidelines</div>
                    <p className="text-wrapper-92">A bulleted list of the permissions associated with the data set.</p>
                  </div>
                </div>
                <div className="frame-45">
                  <div className="text-wrapper-91">Topics Overview</div>
                  <p className="text-wrapper-93">A list of topics included in the data set.</p>
                </div>
              </div>
              <div className="frame-42">
                <div className="frame-46">
                  <div className="text-wrapper-94">Source</div>
                  <p className="text-wrapper-95">The survey or program that is collecting and compiling the data.</p>
                </div>
                <div className="frame-47">
                  <div className="text-wrapper-96">Years / Frequency</div>
                  <p className="text-wrapper-93">The years the data covers and how often the data is collected.</p>
                </div>
              </div>
              <div className="frame-42">
                <div className="frame-46">
                  <div className="text-wrapper-94">Region</div>
                  <p className="text-wrapper-97">The geographic area the data set covers.</p>
                </div>
                <div className="frame-47">
                  <div className="text-wrapper-96">Population</div>
                  <p className="text-wrapper-93">The demographic data the data set includes.</p>
                </div>
              </div>
            </div>
            <div className="frame-48">
              <div className="frame-49">
                <div className="text-wrapper-98">Data Sets</div>
                <div className="frame-50">
                  <div className="frame-51">
                    <p className="text-wrapper-99">American Community Survey (ACS) Demographic Data</p>
                    <p className="text-wrapper-100">American Community Survey (ACS) Special Tabulations on Aging</p>
                    <p className="text-wrapper-100">American Indian, Alaskan Native, and Native Hawaiian PPR</p>
                    <p className="text-wrapper-100">Centers for Independent Living Program PPR</p>
                    <p className="text-wrapper-100">National Ombudsman Reporting System (NORS)</p>
                    <p className="text-wrapper-100">National Survey of Older Americans Act Participants (NSOAAP)</p>
                    <p className="text-wrapper-100">State Independent Living Services Program PPR</p>
                    <Link className="text-wrapper-100" to="/agid03">
                      State Performance Reports (SPR)
                    </Link>
                  </div>
                </div>
              </div>
              <div className="user-interaction-2">
                <img className="union-2" alt="Union" src="/img/union-1.svg" />
                <div className="text-wrapper-101">CLICK</div>
              </div>
            </div>
          </div>
          <div className="frame-52">
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-54">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <p className="text-wrapper-103">American Community Survey (ACS) Demographic Data</p>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-105">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <button className="button-4">
                    <button className="button-5">View Data Set</button>
                  </button>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-58">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <p className="text-wrapper-103">American Community Survey (ACS) Special Tabulations on Aging</p>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-105">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <button className="button-4">
                    <button className="button-5">View Data Set</button>
                  </button>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-58">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <p className="text-wrapper-103">American Indian, Alaskan Native, and Native Hawaiian PPR</p>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-105">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <button className="button-4">
                    <button className="button-5">View Data Set</button>
                  </button>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-58">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <p className="text-wrapper-103">Centers for Independent Living Program PPR</p>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-105">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <button className="button-4">
                    <button className="button-5">View Data Set</button>
                  </button>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-58">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <p className="text-wrapper-103">National Ombudsman Reporting System (NORS)</p>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-105">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <button className="button-4">
                    <button className="button-5">View Data Set</button>
                  </button>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-58">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <p className="text-wrapper-103">National Survey of Older Americans Act Participants (NSOAAP)</p>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-105">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <button className="button-4">
                    <button className="button-5">View Data Set</button>
                  </button>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-58">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <Link to="/agid03">
                        <p className="text-wrapper-103">State Independent Living Services Program PPR</p>
                      </Link>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-108">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <Link to="/agid03">
                    <button className="button-4">
                      <button className="button-5">View Data Set</button>
                    </button>
                  </Link>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-set-summary">
              <div className="frame-53">
                <div className="frame-58">
                  <div className="frame-41">
                    <div className="frame-55">
                      <div className="text-wrapper-102">Data Set</div>
                      <div className="text-wrapper-103">State Performance Reports (SPR)</div>
                    </div>
                    <div className="flexcontainer-2">
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Long Description about the data set. Convallis turpis erat tempus, viverra aliquet. Nullam
                          viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                          aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Vitae nulla nunc
                          euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. Convallis turpis
                          erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc
                          euismod ve semper.
                          <br />
                        </span>
                      </p>
                      <p className="div-9">
                        <span className="text-wrapper-104">
                          Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
                          a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-56">
                    <div className="frame-47">
                      <div className="text-wrapper-105">Usage Guidelines</div>
                      <p className="div-9">
                        Quisque at purus sit amet nisl sodales, Lacinia in quis nisl, Ut mattis turpis in, massa dapibus
                        posuere, Aliquam scelerisque fringilla diam, Etiam sed risus erat
                        <br />
                        Lacinia in quis nisl, Ut mattis turpis in.
                        <br />
                        Ut mattis turpis in, massa dapibus posuere, Aliquam scelerisque.
                      </p>
                    </div>
                  </div>
                  <button className="button-4">
                    <button className="button-5">View Data Set</button>
                  </button>
                </div>
                <div className="frame-57">
                  <div className="frame-55">
                    <div className="text-wrapper-106">Topics Overview</div>
                    <p className="text-wrapper-107">
                      Aging, Demographics, Disability, Education, Environment, Financial, Health, Households, Languages,
                      Population
                    </p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Source</div>
                    <p className="div-9">ACL - American Community Survey</p>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Years / Frequency</div>
                    <div className="div-9">2022-1986 / Yearly</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Region</div>
                    <div className="div-9">US States and Territories</div>
                  </div>
                  <div className="frame-55">
                    <div className="text-wrapper-106">Population</div>
                    <div className="div-9">Residents over 55</div>
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
