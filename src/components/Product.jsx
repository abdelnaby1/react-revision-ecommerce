import { Link } from "react-router-dom";
import "./Product.css"
import { FaStar } from 'react-icons/fa'

function Product({ product, showButton }) {
    const starsLength = product.rating.rate.toFixed();
    // const stars = new Array(starsLength).fill(0);
    const stars = [];
    stars.length = starsLength;
    stars.fill(0);
    console.log(stars);
    return (
        <>

            <div className="card d-flex flex-column  mb-4  max-height" >
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{product.title.slice(0, 40)}</h5>
                    <p className="card-text">{product.description.slice(0, 90) + "..."}</p>
                    <p>Price :<span className="fw-bolder"> {product.price}$</span></p>
                    <p>Rating: {stars.map((s) => (<FaStar style={{ color: "#efef3e" }} />))}</p>
                    {/* <AiOutlineStar style={{ color: "" }} /> */}
                    {showButton && <Link to={`product/${product.id}`} className="btn btn-primary">Details</Link>}
                </div>
            </div>
        </>
    )
}
export default Product