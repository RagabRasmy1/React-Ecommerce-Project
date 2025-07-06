import { combineReducers } from "redux";
import userReducer from "./userReducer";
import CartReducer from "./CartReducer";
import WishListReducer from "./WishListReducer";

export default combineReducers({
    users: userReducer,
    cart: CartReducer,
    wishList: WishListReducer
})