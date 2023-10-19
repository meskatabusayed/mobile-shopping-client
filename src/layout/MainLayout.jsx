import { Outlet } from "react-router-dom";
import Navber from "../components/Header/Navber/Navber";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;