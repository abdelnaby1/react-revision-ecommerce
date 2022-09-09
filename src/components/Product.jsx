import { Link } from "react-router-dom";
import "./Product.css"
function Product({ product, showButton }) {
    if (product?.description?.length > 100) {
        product.description = product.description.slice(0, 100) + " ...";
    }
    return (
        <>

            <div className="card d-flex flex-column  mb-4  max-height" >
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>price :<span className="fw-bolder"> {product.price}$</span></p>
                    {showButton && <Link to={`product/${product.id}`} className="btn position-absolute  fixed-bottom س btn-primary">Details</Link>}
                </div>
            </div>
        </>
    )
}
export default Product