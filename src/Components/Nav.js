import "../App.css";
import "./Nav.css";
import { Link } from 'react-router-dom';


export default function Nav() {

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
      <div className="container-fluid">
        <Link className="navbar-brand anta-regular px-3" to="/">Shoppy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto poppins-medium">
            <li className="nav-item">
              <Link className="nav-link mx-2 active" aria-current="page" to="/products">Products</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Blog</a></li>
                <li><a className="dropdown-item" href="#">About Us</a></li>
                <li><a className="dropdown-item" href="#">Contact us</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/account"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>


  );
}
