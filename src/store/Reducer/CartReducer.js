const INITAL_VALUE = {
  cartProduct: [],
};

const CartReducer = (state = INITAL_VALUE, action) => {
  if (action.type === "ADD") {
    const newProduct = {
      product: action.payload.product,
      quantity: action.payload.quantity,
    };
    let indexUpdate = state.cartProduct.findIndex(
      (item) => item.product.title === newProduct.product.title
    );
    if (indexUpdate !== -1) {
      state.cartProduct[indexUpdate].quantity += newProduct.quantity;
      return {
        cartProduct: [...state.cartProduct],
      };
    } else {
      return {
        cartProduct: [...state.cartProduct, newProduct],
      };
    }
  } else if (action.type === "REMOVE_CART") {
    let indexRemove = state.cartProduct.findIndex(
      (item) => item.product.title === action.payload.title
    );
    if (indexRemove !== -1) {
      const updatedCart = [...state.cartProduct];
      updatedCart.splice(indexRemove, 1);
      return {
        cartProduct: updatedCart,
      };
    }
    return {
      cartProduct: [...state.cartProduct],
    };
  }


  else if (action.type === "CLEAR_CART") {
    return {
      cartProduct: [],
    };
  }

  return state;
};

export default CartReducer;