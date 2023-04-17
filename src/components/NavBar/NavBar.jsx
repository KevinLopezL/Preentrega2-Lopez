import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgComic = "../img/logo.png";
  return (
    <header>
      <Link to={"/"}>
        <img className="imgComic" src={imgComic} alt="Logo Comic" />
      </Link>
      <ul>
        <li>
          <NavLink to={`/categoria/2`}>Comics</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/3`} >Accesorios</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar