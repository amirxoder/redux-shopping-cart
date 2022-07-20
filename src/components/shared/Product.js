import React from "react";
import { isInCart, quntityCounter, shorten } from "../../helpers/functions";
import { Link } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux/es/exports";

//styles
import styles from "./Product.module.css";

//icon
import { BsFillTrashFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { HiPlus, HiMinusSm } from "react-icons/hi";

const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const { title, price, image, id } = productData;
  return (
    <div className={styles.cart__container}>
      <img
        className={styles.img}
        src={image}
        alt="product"
        style={{ width: "200px" }}
      />
      <div className={styles}>
        <h1>{shorten(title)}</h1>
        <p>{price} $</p>

        <div className={styles.buttons__wrapper}>
          <Link to={`/products/${id}`} className={styles.details__btn}>
            Details
          </Link>
          <div className={styles.toggle__btn_wrapper}>
            {isInCart(state, id) ? (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "INCREASE_ITEM", payload: productData })
                }
              >
                <HiPlus />
              </button>
            ) : (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
              >
                <FaCartPlus />
              </button>
            )}
            {quntityCounter(state, id) > 1 && (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "DECREASE_ITEM", payload: productData })
                }
              >
                <HiMinusSm />
              </button>
            )}
            {quntityCounter(state, id) === 1 && (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <BsFillTrashFill />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
