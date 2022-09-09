import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
function ProductDetailsPage() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { productId } = useParams();
    const API_URL = `https://fakestoreapi.com/products/`
    console.log(productId);
    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/${productId}`).then(res => res.json()).then(product => setProduct(product))
        setLoading(false);
    }, [])
    if (loading) return 'Loading...'
    return (
        <>
            <Product product={product} />
        </>
    )
}
export default ProductDetailsPage