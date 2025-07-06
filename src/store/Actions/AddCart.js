const AddCart = (product,quantity) => {
    return {
        type:'ADD',
        payload:{
            product: product,
            quantity: quantity
        }
    }
}

export default AddCart