import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCart from "../store/Actions/AddCart";
import { useNavigate } from "react-router";
import AddWishList from "../store/Actions/AddWishList";

const ModalProductComponent = ({product, index}) => {

    const [wishListState,setWishListState] = useState([])
    const [quantity,setQuantity] = useState(1)


    const increaseQuantity = () => {
      if(product.stock !== quantity){
        setQuantity(quantity+1)
      }
    }

    const decreaseQuantity = () => {
      if(quantity !== 1){
        setQuantity(quantity-1)
      }
    }

    const isAuth = useSelector(state => state.users.isAuth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCart = (product) => {
      if(isAuth){

        dispatch(AddCart(product,quantity))
      }else{
        navigate('/login')
      }
    }

    const addToWishList = (product) => {
      if(isAuth){
        let index = wishListState.findIndex(item => item.id === product.id);
        if(index !== -1){
            console.log(index)
            wishListState.splice(index,1)
            setWishListState([
                ...wishListState
            ])
        }else{
            setWishListState([
                ...wishListState,
                product
            ])
        }
          dispatch(AddWishList(product))
      }else{
          navigate('/login')
      }
  }


    return (
    <div className="modal fade" id={`${product.category}_${index}`} tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="row align-items-stretch">
            <div className="col-lg-6 p-lg-0">
                <a className="product-view d-block h-100 bg-cover bg-center" style={{background: `url(${product.thumbnail})`}} href={product.thumbnail} data-lightbox={`${product.category}_${index}`} title="Red digital smartwatch"></a>
                {
                  product.images.map(img => {
                    return (
                      <a className="d-none" key={img} href={img} title={product.title}data-lightbox={`${product.category}_${index}`} ></a>
                    )
                  })
                }


            </div>
            <div className="col-lg-6">
              <button className="close p-4" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className="p-5 my-md-4">

                <h2 className="h4">{product.title}</h2>
                <p className="text-muted">${product.price}</p>
                <p className="text-small mb-4">{product.description}</p>
                <div className="row align-items-stretch mb-4">
                  <div className="col-sm-7 pr-sm-0">
                    <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                      <div className="quantity">
                        <button className="dec-btn p-0 "onClick={() => decreaseQuantity()}>
                          <i className="fas fa-caret-left"></i>
                        </button>
                        <input className="form-control border-0 shadow-0 p-0" type="text" value={quantity} />
                        <button className="inc-btn p-0" onClick={() => increaseQuantity()}>
                          <i className="fas fa-caret-right"></i>
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-sm-0">
                      <button className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                      onClick={() => addToCart(product)}>
                        Add to cart
                      </button>
                  </div>
                </div>

                  <button className="btn btn-link text-dark p-0" onClick={() => addToWishList(product)}>
                            {
                                wishListState.some(item => item.id === product.id) ? <i className="fas fa-heart"></i> : (
                                  <>  <i className="far fa-heart"></i>
                                  <span>Add To wish List</span></>
                              )
                            }
                    </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalProductComponent;