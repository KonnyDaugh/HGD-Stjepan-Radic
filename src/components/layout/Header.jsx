import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className={`header__nav ${isOpen ? "header__nav-open" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Početna</NavLink>
          <NavLink to="/o-nama">O nama</NavLink>
          <NavLink to="/vijesti">Vijesti</NavLink>
          <NavLink to="/press">Press</NavLink>
          <NavLink to="/galerija">Galerija</NavLink>
          <NavLink to="/kontakti">Kontakti</NavLink>
        </nav>

        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>

      </div>
    </header>
  )
};

export default Header;