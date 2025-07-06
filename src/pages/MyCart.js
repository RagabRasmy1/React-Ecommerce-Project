import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RemoveCart from "../store/Actions/RemoveCart";

const MyCart = () => {
  const myCart = useSelector((state) => state.cart.cartProduct);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [myStateCart, setMyStateCart] = useState(myCart);
  const dispatch = useDispatch();

  const deleteFromCart = (product) => {
    dispatch(RemoveCart(product));
    setMyStateCart([...myCart]);
  };

  useEffect(() => {
    let sub = 0;
    myStateCart.forEach((cart) => {
      sub += cart.quantity * cart.product.price;
    });
    setSubTotal(sub);
    setTax(Math.round(sub * 0.1));
  }, [myStateCart]);

  return (
    <section className="py-5">
      <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
      <div className="row">
        <div className="col-lg-8 mb-4 mb-lg-0">
          <div className="table-responsive mb-4">
            {myStateCart.length > 0 ? (
              <table className="table">
                <thead className="bg-light">
                  <tr>
                    <th className="border-0">Product</th>
                    <th className="border-0">Price</th>
                    <th className="border-0">Quantity</th>
                    <th className="border-0">Total</th>
                    <th className="border-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {myStateCart.map((cart) => (
                    <tr key={cart.product.id}>
                      <td className="pl-0 border-0" scope="row">
                        <div className="media align-items-center">
                          <Link
                            className="d-block"
                            to={`/productDetails/${cart.product.id}`}
                          >
                            <img
                              src={cart.product.thumbnail}
                              alt={cart.product.title}
                              width="70"
                              height="70"
                              style={{
                                objectFit: "contain",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                              }}
                            />
                          </Link>
                          <div className="media-body ml-3">
                            <strong className="h6">
                              <Link
                                className="reset-anchor"
                                to={`/productDetails/${cart.product.id}`}
                              >
                                {cart.product.title}
                              </Link>
                            </strong>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-0">
                        <p className="mb-0 small">${cart.product.price}</p>
                      </td>
                      <td className="align-middle border-0">
                        <div className="border d-flex align-items-center justify-content-between px-3">
                          <span className="small text-uppercase text-gray">
                            Qty
                          </span>
                          <input
                            className="form-control form-control-sm border-0 shadow-0 p-0"
                            type="text"
                            value={cart.quantity}
                            readOnly
                          />
                        </div>
                      </td>
                      <td className="align-middle border-0">
                        <p className="mb-0 small">
                          ${cart.quantity * cart.product.price}
                        </p>
                      </td>
                      <td className="align-middle border-0">
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteFromCart(cart.product)}
                          title="Remove"
                        >
                          <i className="fas fa-trash-alt small"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h4 className="text-muted">No products in your cart.</h4>
            )}
          </div>

          <div className="bg-light px-4 py-3 rounded shadow-sm">
            <div className="row align-items-center text-center">
              <div className="col-md-6 mb-3 mb-md-0 text-md-left">
                <Link className="btn btn-link p-0 text-dark btn-sm" to="/shop">
                  <i className="fas fa-long-arrow-alt-left mr-2" />
                  Continue shopping
                </Link>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="/checkout" className="btn btn-outline-dark btn-sm">
                  Proceed to checkout
                  <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="card border-0 rounded shadow-sm bg-light">
            <div className="card-body">
              <h5 className="text-uppercase mb-4">Cart total</h5>
              <ul className="list-unstyled mb-0">
                <li className="d-flex justify-content-between">
                  <strong className="small">Subtotal</strong>
                  <span className="text-muted">${subTotal}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong className="small">Tax (10%)</strong>
                  <span className="text-muted">${tax}</span>
                </li>
                <li className="border-bottom my-2"></li>
                <li className="d-flex justify-content-between mb-4">
                  <strong className="small">Total</strong>
                  <span>${subTotal + tax}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;