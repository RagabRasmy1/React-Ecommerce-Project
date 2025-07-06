import { Outlet } from "react-router";
import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";

const Layout = () => {
    return (
        <div className="page-holder">
            <HeaderComponent />
            <div className="container">
                <Outlet/>
            </div>
            <FooterComponent />
        </div>
    );
}

export default Layout;