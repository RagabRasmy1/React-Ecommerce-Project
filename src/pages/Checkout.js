import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import clearCart from "../store/Actions/ClearCart";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartProduct);

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sub = 0;
    cart.forEach((item) => {
      sub += item.quantity * item.product.price;
    });
    const calculatedTax = Math.round(sub * 0.1);
    setSubtotal(sub);
    setTax(calculatedTax);
    setTotal(sub + calculatedTax);
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Success!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      dispatch(clearCart()); // ✅ تفريغ الكارت
      navigate("/");         // ✅ الرجوع للهوم
    });
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="h5 text-uppercase mb-4">Checkout</h2>
        <div className="row">
          <div className="col-lg-8 mb-5">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input className="form-control" id="firstName" type="text" required />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input className="form-control" id="lastName" type="text" required />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="email">Email Address</label>
                  <input className="form-control" id="email" type="email" required />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="address">Shipping Address</label>
                  <input className="form-control" id="address" type="text" required />
                </div>
              </div>
              <button className="btn btn-dark mt-3" type="submit">
                Place Order
              </button>
              <Link to="/mycart" className="btn btn-link text-muted ml-3">
                Back to Cart
              </Link>
            </form>
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <div className="card border-0 rounded shadow-sm bg-light">
              <div className="card-body">
                <h5 className="text-uppercase mb-4">Summary</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between">
                    <strong className="small">Subtotal</strong>
                    <span className="text-muted">${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong className="small">Tax (10%)</strong>
                    <span className="text-muted">${tax.toFixed(2)}</span>
                  </li>
                  <li className="border-bottom my-2"></li>
                  <li className="d-flex justify-content-between mb-4">
                    <strong className="small">Total</strong>
                    <span>${total.toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Checkout;