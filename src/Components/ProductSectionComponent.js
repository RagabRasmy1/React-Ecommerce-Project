import { useEffect, useState } from "react";
import ModalProductComponent from "./ModalProductComponent";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductSectionComponent = () => {

    const [topTrending,setTopTrending] = useState([])

    const  getTopTrendingProducts = async () => {
      const allProducts = await axios.get('https://dummyjson.com/products?limit=8')
      setTopTrending(allProducts.data.products)
      console.log(topTrending)
    }
    useEffect(() => {
      getTopTrendingProducts()
    },[])
    return (

        <section className="py-5">
        <header>
            <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <div className="row">

          {
            topTrending.map((product, index) => {
              return (
                <>
                  <ModalProductComponent product={product} index={index}/>
                  <ProductComponent product={product} index={index}/>
                </>
              )
            })
          }


        </div>
      </section>
    );
}

export default ProductSectionComponent;