import "./Slider.css";
const images = [
    "https://blog.hubspot.com/hubfs/ecommerce-10.jpg",
    "https://blog.limit.ro/wp-content/uploads/2018/11/ecommerce-web-development.jpg",
    "https://co-well.vn/wp-content/uploads/2019/09/e-commerce-link-building-760x400.png",
    "https://www.icharts.net/wp-content/uploads/2022/01/E-Commerce-Business-.jpg"
]
function Slider() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={images[0]} className="d-block w-100 height-600" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={images[1]} className="d-block w-100 height-600" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={images[2]} className="d-block w-100 height-600" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default Slider