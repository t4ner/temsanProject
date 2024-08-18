import React, { useEffect, useState } from "react";
import "./navbar.css";
import "./navbar2.css";
import { Link } from "react-router-dom";
import logo from "/logo/temsan-logo.svg";

function Navbar() {
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    setIsContactPage(window.location.pathname === "/contact");
  }, []);
  const [openServices, setOpenServices] = useState(false);
  const [openTradingServices, setOpenTradingServices] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav className="nav ">
          <div className="nav__data">
            <a to="/" className="nav__logo ">
              <img src={logo} alt="" className="h-64 mt-5" />
            </a>
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              {menuOpen ? (
                <i className="ri-menu-line nav__burger"></i>
              ) : (
                <i className="ri-menu-line nav__burger"></i>
              )}
            </div>
          </div>

          <div
            className={menuOpen ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list   ">
              <li>
                <a to="/" className="nav__link">
                  ANASAYFA
                </a>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  <a to="/services">ÜRÜNLERİMİZ</a>{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu z-50 font-medium">
                  <li>
                    <a
                      to="/equipment-supply-services"
                      className="dropdown__link p-3"
                    >
                      İPLER
                    </a>
                  </li>

                  <li>
                    <a
                      to="/construction-services"
                      href="#"
                      className="dropdown__link p-3"
                    >
                      PVC KAPLI İPLER
                    </a>
                  </li>

                  <li>
                    <a
                      to="/construction-services"
                      href="#"
                      className="dropdown__link p-3"
                    >
                      NAYLON İPLER
                    </a>
                  </li>
                  <li>
                    <a
                      to="/construction-services"
                      href="#"
                      className="dropdown__link p-3"
                    >
                      PVC KAPLI ÇELİK İPLER
                    </a>
                  </li>
                  <li>
                    <a
                      to="/construction-services"
                      href="#"
                      className="dropdown__link p-3"
                    >
                      BEZLER
                    </a>
                  </li>
                  <li>
                    <a
                      to="/construction-services"
                      href="#"
                      className="dropdown__link p-3"
                    >
                      MOPLAR VE APARATLARI
                    </a>
                  </li>
                  <li>
                    <a
                      to="/construction-services"
                      href="#"
                      className="dropdown__link p-3"
                    >
                      SÜNGERLER
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a to="/whoweare" href="#" className="nav__link">
                  KURUMSAL
                </a>
              </li>

              {/* <li>
              <Link to="/world-map" href="#" className="nav__link">
                WORLD MAP
              </Link>
            </li> */}
              <li>
                <a to="/contact" href="#" className="nav__link">
                  HABERLER
                </a>
              </li>
              <li>
                <a to="/contact" href="#" className="nav__link">
                  İLETİŞİM
                </a>
              </li>
              <li>
                <a to="/contact" href="#" className="nav__link">
                  e-KATALOG
                </a>
              </li>
              <li>
                <a href="#" className="nav__link"></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="header">
        <div className="mb-4">
          <a className="m" to="/">
            <img src={logo} alt="" className="h-60" />
          </a>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav className="z-50">
          <ul>
            <li>
              <a to="/">HOME</a>
            </li>
            <li>
              <div className="flex items-center">
                <a to="/services">SERVICES</a>

                <button
                  className="ml-5"
                  onClick={() => setOpenServices(!openServices)}
                >
                  <i className="ri-arrow-down-line text-[#006495]"></i>
                </button>
              </div>
            </li>
            {openServices && (
              <div className="">
                <ul className="ml-3">
                  <li>
                    {" "}
                    <a to="/equipment-supply-services">
                      Equipment & Spare Part Supply
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a to="/construction-services">Construction Services</a>
                  </li>

                  <div className="flex items-center">
                    <li>
                      <a to="/trading-services">Trading Service</a>
                    </li>
                    <button
                      className="ml-5"
                      onClick={() =>
                        setOpenTradingServices(!openTradingServices)
                      }
                    >
                      <i className="ri-arrow-down-line font-semibold text-[#006495]"></i>{" "}
                    </button>
                  </div>
                  {openTradingServices && (
                    <div className="">
                      <ul className="ml-4">
                        <li>
                          {" "}
                          <a to="/clinker-and-cement-trading">
                            Clinker & Cement Trading
                          </a>
                        </li>
                        <li>
                          <a to="/coal-trading">Coal Trading</a>
                        </li>
                        <li>
                          {" "}
                          <a to="/alternative-fuels">
                            Alternative Fuels Trading
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                  <li>
                    {" "}
                    <a to="/finance-solutions">Finance Solutions</a>
                  </li>

                  <li>
                    {" "}
                    <a to="/project-management">PROJECT MANAGEMENT</a>
                  </li>
                  <li>
                    {" "}
                    <a to="/consultancy">CONSULTANCY</a>
                  </li>
                  <li>
                    {" "}
                    <a to="/engineering">ENGINEERING</a>
                  </li>
                  <li>
                    {" "}
                    <a to="/licensing">LICENSING</a>
                  </li>
                </ul>
              </div>
            )}

            <li>
              <a to="/whoweare" href="#">
                WHO WE ARE
              </a>
            </li>
            {/* <li>
      <Link to="/world-map" href="#" className="nav__link">
        WORLD MAP
      </Link>
    </li> */}
            <li>
              <a to="/contact" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <label for="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
    </>
  );
}

export default Navbar;
