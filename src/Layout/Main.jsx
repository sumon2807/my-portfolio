import {Outlet} from "react-router-dom"
import Footer from "../Pages/Sheard/Footer";
import Navbar from "../Pages/Sheard/Navbar";
const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;