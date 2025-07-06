import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const isAuth = useSelector((state) => state.users.isAuth);
  const user = useSelector((state) => state.users.user);
  const cartLength = useSelector((state) => state.cart.cartProduct.length);
  const wishListLength = useSelector((state) => state.wishList.wishList.length);

  return (
    <header className="header bg-white shadow-sm sticky-top">
      <div className="container px-3 px-lg-4">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/logo192.png" // ضع رابط الشعار هنا (أو استبدله بـ صورة ثابتة عندك)
              alt="Logo"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
            />
            <span className="font-weight-bold text-uppercase text-dark">
              Boutique
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto align-items-center">
              {isAuth ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center"
                      to="/cart"
                    >
                      <i className="fas fa-shopping-cart mr-2 text-dark"></i>
                      Cart <small className="ml-1">({cartLength})</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center"
                      to="/wishlist"
                    >
                      <i className="far fa-heart mr-2 text-danger"></i>
                      <small>({wishListLength})</small>
                    </Link>
                  </li>
                  <li className="nav-item ml-3">
                    <span className="nav-link text-dark">
                      Welcome, <strong>{user.userName}</strong>
                    </span>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link d-flex align-items-center"
                  >
                    <i className="fas fa-user-alt mr-2 text-dark"></i>Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;