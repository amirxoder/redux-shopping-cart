import React  from "react";


//icons
import { RiShoppingCart2Fill } from "react-icons/ri";

//react router dom
import { Link } from "react-router-dom";

//styles
import styles from "./Navbar.module.css";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector(state => state.cartState)

  return (
    <div className={styles.navbar__wrapper}>
      <div className={styles.navbar__container}>
        <Link to="/products" className={styles.logo}>
          Shop
        </Link>
        <Link to="/cart" className={styles.shopping__wrapper}>
          <RiShoppingCart2Fill className={styles.shopping__logo}  />
          <span className={styles.items__counter}>{state.itemsCounter}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
