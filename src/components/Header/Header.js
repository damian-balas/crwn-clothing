import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./Header.sass";
import { auth } from "../../firebase/firebaseUtils";

const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <nav className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <button className="option sign-out" onClick={() => auth.signOut()}>
          SIGN OUT
        </button>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </nav>
    {
      !hidden && <CartDropdown />
    }
  </header>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
