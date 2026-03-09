import { NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/logo.png"

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="header__nav">
          <NavLink to="/">Početna</NavLink>
          <NavLink to="/o-nama">O nama</NavLink>
          <NavLink to="/vijesti">Vijesti</NavLink>
          <NavLink to="/press">Press</NavLink>
          <NavLink to="/galerija">Galerija</NavLink>
          <NavLink to="/kontakti">Kontakti</NavLink>
        </nav>
      </div>
    </header>
  )
}