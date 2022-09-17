
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const { pathname } = useLocation();
    return (
        <>
            <nav className="navbar  sticky-top  navbar-expand-lg bg-dark">
                <div className="container ">
                    <Link className="navbar-brand text-light" to={`${pathname.includes("admin") ? '/admin' : '/'}`}>Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to={`${pathname.includes("admin") ? '/admin' : '/'}`}>Home</Link>
                            </li>
                            {!pathname.includes("admin") && (<li className="nav-item">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>)}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;