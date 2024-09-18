import React, { useEffect, useState } from "react";
import "./navbar.css";
import "./navbar2.css";
import { Link } from "react-router-dom";
import logo from "/logo/temsan-logo.svg";

function Navbar() {
  const [openServices, setOpenServices] = useState(false);
  const [openTradingServices, setOpenTradingServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scrollY value as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="">
        <nav
          className={`nav ${
            scrolled ? "scrolled" : ""
          } fixed top-0 left-0 w-full z-50 `}
        >
          <div className="nav__data">
            <a to="/" className="nav__logo">
              <Link to="/">
                <img src={logo} alt="" className="w-64 mt-5" />
              </Link>
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
            <ul className="nav__list">
              <li>
                <Link to="/" className="nav__link">
                  ANASAYFA
                </Link>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  <p>ÜRÜNLERİMİZ</p>{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu z-50 font-medium rounded-lg overflow-hidden">
                  <li>
                    <Link to="/category/ropes" className="dropdown__link p-3">
                      İPLER
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/category/pvc-coated-rope"
                      className="dropdown__link p-3"
                    >
                      PVC KAPLI İPLER
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/category/nylon-ropes"
                      className="dropdown__link p-3"
                    >
                      NAYLON İPLER
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/category/pvc-coated-steel-ropes"
                      className="dropdown__link p-3"
                    >
                      PVC KAPLI ÇELİK İPLER
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/cloths" className="dropdown__link p-3">
                      BEZLER
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/mops" className="dropdown__link p-3">
                      MOPLAR VE APARATLARI
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/sponges" className="dropdown__link p-3">
                      SÜNGERLER
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a to="/whoweare" className="nav__link">
                  KURUMSAL
                </a>
              </li>
              <li>
                <a to="/contact" className="nav__link">
                  HABERLER
                </a>
              </li>
              <li>
                <a to="/contact" className="nav__link">
                  İLETİŞİM
                </a>
              </li>
              <li>
                <a to="/contact" className="nav__link">
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
          <Link to="/">
            <img src={logo} alt="" className="w-60" />
          </Link>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav className="z-50">
          <ul>
            <li>
              <Link to="/">ANASAYFA</Link>
            </li>
            <li>
              <div className="flex items-center">
                <p>ÜRÜNLERİMİZ</p>
                <button
                  className="ml-5"
                  onClick={() => setOpenServices(!openServices)}
                >
                  <i className="ri-arrow-down-line text-[#006495]"></i>
                </button>
              </div>
            </li>
            {openServices && (
              <div>
                <ul className="ml-3">
                  <li>
                    <Link to="/category/ropes">İPLER</Link>
                  </li>
                  <li>
                    <Link to="/category/pvc-coated-rope">PVC KAPLI İPLER</Link>
                  </li>

                  <li>
                    <Link to="/category/nylon-ropes">NAYLON İPLER</Link>
                  </li>
                  <li>
                    <Link to="/category/pvc-coated-steel-ropes">
                      PVC KAPLI ÇELİK İPLER
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/cloths">BEZLER</Link>
                  </li>
                  <li>
                    <Link to="/category/mops">MOPLAR VE APARATLARI</Link>
                  </li>
                  <li>
                    <Link to="/category/sponges">SÜNGERLER</Link>
                  </li>
                </ul>
              </div>
            )}
            <li>
              <a to="/whoweare">KURUMSAL</a>
            </li>
            <li>
              <a to="/contact">HABERLER</a>
            </li>
            <li>
              <a to="/contact">İLETİŞİM</a>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
    </>
  );
}

export default Navbar;
