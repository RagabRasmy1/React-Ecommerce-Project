const INITAL_VALUE = {
    wishList : []
}

const WishListReducer = (state = INITAL_VALUE, action) => {

    if(action.type === 'ADDWishList'){
        //check if found OR Not
        let index = state.wishList.findIndex(item => item.id === action.payload.id)
        if(index !== -1){
            state.wishList.splice(index,1)
        }else{
            state.wishList.push(action.payload)
        }
        return {
            ...state
        }
    }else if (action.type === 'REMOVE_WISHLIST'){
        let indexRemove = state.wishList.findIndex(item => item.id === action.payload.id)
        if(indexRemove !== -1){
            state.wishList.splice(indexRemove,1)
        }
        return {
            ...state
        }
    }else{
        return state
    }

}

export default WishListReducer