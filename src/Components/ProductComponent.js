import { useDispatch, useSelector } from "react-redux";
import AddCart from "../store/Actions/AddCart";
import { useNavigate } from "react-router";
import AddWishList from "../store/Actions/AddWishList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ product, index }) => {
  const [wishListState, setWishListState] = useState([]);
  const isAuth = useSelector((state) => state.users.isAuth);
  const wishList = useSelector((state) => state.wishList.wishList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (product) => {
    if (isAuth) {
      dispatch(AddCart(product, 1));
    } else {
      navigate("/login");
    }
  };

  const addToWishList = (product) => {
    if (isAuth) {
      let index = wishListState.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        wishListState.splice(index, 1);
        setWishListState([...wishListState]);
      } else {
        setWishListState([...wishListState, product]);
      }
      dispatch(AddWishList(product));
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    setWishListState(wishList);
  }, [wishList]);

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
      <div
        className="product text-center p-3 rounded"
        style={{
          border: "1px solid #eee",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <div className="position-relative mb-3">
          <Link className="d-block mb-2" to={`/productDetails/${product.id}`}>
            <img
              className="img-fluid"
              style={{
                maxHeight: "230px",
                objectFit: "contain",
                padding: "10px",
              }}
              src={product.thumbnail}
              alt={product.title}
            />
          </Link>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => addToWishList(product)}
                >
                  {wishListState.some((item) => item.id === product.id) ? (
                    <i className="fas fa-heart"></i>
                  ) : (
                    <i className="far fa-heart"></i>
                  )}
                </button>
              </li>
              <li className="list-inline-item m-0 p-0">
                <button
                  className="btn btn-sm btn-dark"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </li>
              <li className="list-inline-item mr-0">
                <a
                  className="btn btn-sm btn-outline-dark"
                  href={`#${product.category}_${index}`}
                  data-toggle="modal"
                >
                  <i className="fas fa-expand"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6 className="mb-1">
          <Link className="reset-anchor text-dark" to={`/productDetails/${product.id}`}>
            {product.title}
          </Link>
        </h6>
        <p className="small text-muted mb-0">{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductComponent;