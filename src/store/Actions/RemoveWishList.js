const removeWishList = (product) => {
    return {
        type:"REMOVE_WISHLIST",
        payload:product
    }
}

export default removeWishList