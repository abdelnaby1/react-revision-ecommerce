import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useEffect, useState } from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function AdminProductsPage() {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    const deleteProductHandler = (p) => {
        MySwal.fire({
            title: `Are you sure you want to delete ${p.title}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/products/${p.id}`, {
                    method: 'DELETE'
                }).then(res => {
                    if (res.ok) {
                        fetch("http://localhost:8000/products")
                            .then(res => res.json())
                            .then(data => {
                                setProducts(data)
                                MySwal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            });

                    }
                })

            }
        })


    }
    return (
        <div className="container-fluid">

            <div className="row" style={{ height: "100vh" }}>
                <div className="col-2 pt-3 sidebar bg-dark">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <h1>Products Page</h1>
                    <Link to="/admin/products/add">
                        <button className="btn btn-success mt-3">Add New Product</button>
                    </Link>
                    <table className="table table-striped mt-5">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Operations</th>

                            </tr>
                        </thead>
                        <tbody>
                            {products?.map(p => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.title}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <Link to={`/admin/products/${p.id}`}>
                                            <button className="btn btn-info btn-sm ml-2 mx-1">View</button>
                                        </Link>
                                        <button className="btn btn-primary btn-sm mx-1">Edit</button>
                                        <button className="btn btn-danger btn-sm mx-1" onClick={() => (deleteProductHandler(p))}>Delete</button>

                                    </td>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    )
}
export default AdminProductsPage