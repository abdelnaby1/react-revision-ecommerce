import Sidebar from "./Sidebar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
function AdminProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(`http://localhost:8000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [productId])
    return (
        <div className="container-fluid">
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-2 pt-3 sidebar bg-dark">
                    <Sidebar />
                </div>
                <div className="col-10">
                    {product && <h2>{product.title}</h2>}
                </div>
            </div >
        </div>
    )
}
export default AdminProductDetails