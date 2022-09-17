import Sidebar from "./Sidebar"
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
function AddProductPage() {
    const navigator = useNavigate();
    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = "Required";
        } else if (values.title.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.desc) {
            errors.desc = 'Required';
        } else if (values.desc.length < 5) {
            errors.desc = 'Must be 5 characters or more';
        }
        if (!values.price) {
            errors.price = 'Required';
        } else if (!values.price < 0) {
            errors.price = 'Must be positive';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            price: '',
        },
        validate,
        onSubmit: values => {
            fetch("http://localhost:8000/products", {
                method: 'POST',
                body: JSON.stringify(values)
            }).then(data => navigator("/admin/products"))
        },
    });
    return (
        <div className="container-fluid">
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-2 pt-3 sidebar bg-dark">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <h1>Add Product</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group mt-2">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                            {formik.errors.title ? <div className="text-danger">{formik.errors.title}</div> : null}

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="desc">Description</label>
                            <textarea
                                className="form-control"
                                id="desc"
                                name="desc"
                                aria-describedby="emailHelp"
                                placeholder="Enter description"
                                onChange={formik.handleChange}
                                value={formik.values.desc}
                            />
                            {formik.errors.desc ? <div className="text-danger">{formik.errors.desc}</div> : null}

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                aria-describedby="emailHelp"
                                placeholder="Enter price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />
                            {formik.errors.price ? <div className="text-danger">{formik.errors.price}</div> : null}

                        </div>

                        <button type="submit" className="btn btn-primary mt-4">Add Prooduct</button>
                    </form>
                </div>
            </div >
        </div>
    )
}
export default AddProductPage