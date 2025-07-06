import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import removeWishList from "../store/Actions/RemoveWishList";

const MyWishList = () => {
  const myWishList = useSelector((state) => state.wishList.wishList);
  const [myStateWishList, setMyStateWishList] = useState(myWishList);
  const dispatch = useDispatch();

  const deleteFromWishList = (product) => {
    dispatch(removeWishList(product));
    setMyStateWishList([...myWishList]);
  };

  return (
    <section className="py-5">
      <h2 className="h5 text-uppercase mb-4">Wish List</h2>
      <div className="row">
        <div className="col-lg-12 mb-4 mb-lg-0">
          <div className="table-responsive mb-4">
            {myStateWishList.length > 0 ? (
              <table className="table">
                <thead className="bg-light">
                  <tr>
                    <th className="border-0">Product</th>
                    <th className="border-0">Price</th>
                    <th className="border-0">Brand</th>
                    <th className="border-0">Category</th>
                    <th className="border-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {myStateWishList.map((wishlist) => (
                    <tr key={wishlist.id}>
                      <td className="pl-0 border-0">
                        <div className="media align-items-center">
                          <Link to={`/productDetails/${wishlist.id}`}>
                            <img
                              src={wishlist.thumbnail}
                              alt={wishlist.title}
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
                                to={`/productDetails/${wishlist.id}`}
                              >
                                {wishlist.title}
                              </Link>
                            </strong>
                          </div>
                        </div>
                      </td>

                      <td className="align-middle border-0">
                        <p className="mb-0 small">${wishlist.price}</p>
                      </td>

                      <td className="align-middle border-0">
                        <p className="mb-0 small">{wishlist.brand}</p>
                      </td>

                      <td className="align-middle border-0">
                        <p className="mb-0 small">{wishlist.category}</p>
                      </td>

                      <td className="align-middle border-0">
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteFromWishList(wishlist)}
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
              <h4 className="text-muted">
                No products found in your wishlist.
              </h4>
            )}
          </div>

          <div className="bg-light px-4 py-3 rounded shadow-sm">
            <div className="row align-items-center text-center">
              <div className="col-md-6 mb-3 mb-md-0 text-md-left">
                <Link className="btn btn-link p-0 text-dark btn-sm" to="/shop">
                  <i className="fas fa-long-arrow-alt-left mr-2"></i>
                  Continue shopping
                </Link>
              </div>
              <div className="col-md-6 text-md-right">
                <button className="btn btn-outline-dark btn-sm">
                  Proceed to checkout
                  <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWishList;