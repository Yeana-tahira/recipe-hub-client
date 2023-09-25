import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Main = () => {
    const {loading} = useContext(AuthContext);
    if (loading) {
        return <p className="m-24">Loading <progress className=" progress h-6 w-56"></progress></p>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;