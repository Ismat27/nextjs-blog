import Link from "next/link";
import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    menuRef.current.className = "not-active";
  };
  const toggle = () => {
    if (!menuOpen) {
      menuRef.current.className = "active";
    } else {
      menuRef.current.className = "not-active";
    }
    setMenuOpen(!menuOpen);
  };
  return (
    <Wrapper>
      <nav>
        <Container className="nav-container">
          <div className="menu-box">
            <h1 className="logo">
              smart<span>Dev</span>
            </h1>
            <Hamburger menuRef={menuRef} toggler={toggle} />
          </div>
          <div className={`${menuOpen ? "nav-list-box open" : "nav-list-box"}`}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link
                  className="nav-link"
                  href={"/#projects"}
                  onClick={closeMenu}
                >
                  works
                </Link>
              </li>
              <li className="nav-list-item">
                <Link
                  className="nav-link"
                  href={"/#contact"}
                  onClick={closeMenu}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding-top: 1rem;
  a,
  .logo {
    font-family: Lato, Trebuchet MS, sans-serif;
  }
  a {
    font-size: 1rem;
    text-transform: capitalize;
  }
  .nav-link:active,
  .nav-link:focus {
    color: #fff;
  }
`;

export default Header;
