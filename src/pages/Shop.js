import { useEffect, useState } from "react";
import HeroSectionComponent from "../Components/HeroSectionComponent";
import axios, { all } from "axios";
import ProductComponent from "../Components/ProductComponent";
import ModalProductComponent from "../Components/ModalProductComponent";
import ReactPaginate from "react-paginate";

const Shop = () => {


    const [page,setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [products,setProducts] = useState([])
    const [search,setSearch] = useState('')
    const [show, setShow] = useState(true)

    const getAllProduct = async (e) => {
        let allProducts;
        const skip = (page-1)*12;
        if(e && e.type==='submit' && search.length > 0){
            e.preventDefault();
            allProducts = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
            setShow(false)
        }else{
            allProducts = await axios.get(`https://dummyjson.com/products?limit=12&skip=${skip}`)
            setShow(true)
        }
        console.log(allProducts.data.total)
        setTotal(allProducts.data.total)
        setProducts(allProducts.data.products)
    }

    const handlePageClick = (e) => {
        setPage(e.selected + 1);
    };



    useEffect(() => {
        getAllProduct()
    },[page])


    return (<>
        <HeroSectionComponent/>
       <div className="col-lg-12 order-1 order-lg-2 mb-5 mb-lg-0 mt-5">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-small text-muted mb-0">Showing {(page-1)*12}–{page*12} of {total} results</p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                      <li className="list-inline-item">
                        <form onSubmit={getAllProduct} className="d-flex justify-content-center">
                            <input type="search" onChange={(e) => setSearch(e.target.value)} name="search" className="form-control"  placeholder="Type product Name"/>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                    {
                        products.map((product,index) => {
                            return <>
                            <ModalProductComponent product={product} key={index} />
                            <ProductComponent product={product} key={index} />
                            </>
                        })
                    }
                </div>

                {
                    show && (<nav aria-label="Page navigation example">
                    <ReactPaginate
                    breakLabel="..."
                    nextLabel="»"
                    pageRangeDisplayed={3}
                    pageCount={total}
                    previousLabel="«"
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    activeClassName="active"
                    pageLinkClassName="page-link"
                    containerClassName="pagination justify-content-center justify-content-lg-center"
                    nextClassName="page-item"
                    previousClassName="page-item"
                    nextLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    />
                    </nav>)
                }

            </div>
            </>
    );
}

export default Shop;