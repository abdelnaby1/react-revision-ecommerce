import Sidebar from "./Sidebar"

function AdminHomePage() {
    return (
        <div className="container-fluid">
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-2 pt-3  bg-dark">
                    <Sidebar />
                </div>
                <div className="col-10">
                    Home
                </div>
            </div >
        </div>
    )
}
export default AdminHomePage