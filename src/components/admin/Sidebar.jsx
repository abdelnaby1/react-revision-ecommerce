import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <>
            <ul className="list-unstyled text-center ">
                <li className="p-2 bg-light mb-4 rounded-pill">
                    <Link className="text-dark text-decoration-none" to="/admin">Admin Home</Link>
                </li>
                <li className="p-2 bg-light mb-4 rounded-pill">
                    <Link className="text-dark text-decoration-none" to="/admin/products">Get All Products</Link>
                </li>
                <li className="p-2 bg-light mb-4 rounded-pill">
                    <Link className="text-dark text-decoration-none" to="/admin/categories">Get All Categories</Link>
                </li>
            </ul>
        </>
    )
}

export default Sidebar