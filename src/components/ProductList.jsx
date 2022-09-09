import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
    const API_URL = "https://fakestoreapi.com";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const getProducts = async (url) => {
        const res = await fetch(`${url}/products`);
        const data = await res.json();
        setProducts(data);

    }
    const getCategories = async (url) => {
        const res = await fetch(`${url}/products/categories`);
        const data = await res.json();
        setCategories(data);

    }
    useEffect(() => {
        getProducts(API_URL);
        getCategories(API_URL);
    }, [])
    useEffect(() => {
        getProductsInCategory(API_URL);
    }, [selectedCategory])
    const getProductsInCategory = async (url) => {
        const res = await fetch(`${url}/products/category/${selectedCategory}`)

        const data = await res.json();
        setProducts(data);
    }
    const handleClick = (e) => {
        // document.getElementById("all").classList.add("dark")
        document.querySelectorAll("#category").forEach(b => {
            console.log(b);
            b.classList.remove("btn-light");
            b.classList.add("btn-dark");
        })
        e.target.classList.remove("btn-dark");
        e.target.classList.add("btn-light");
        setSelectedCategory(e.target.innerHTML)
    }
    if (products.length === 0) return 'Loading...'
    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
                <div className="d-flex flex-lg-row flex-sm-column justify-content-center mb-3">
                    <button id="category" onClick={() => getProducts(API_URL)} className="btn btn-light   fw-bold  m-2" >All</button>

                    {categories.map((c) => (
                        <button id="category" onClick={handleClick} className="btn btn-dark  fw-bold  m-2" key={c}>{c}</button>
                    ))}
                </div>

                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-3 col-sm-6">
                            <Product product={product} showButton />
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
export default ProductsList;