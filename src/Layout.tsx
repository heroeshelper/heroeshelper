import { Outlet } from "react-router-dom";
import TopHeader from "./shared/components/TopHeader";
import Footer from "./shared/components/Footer";

const Layout = () => {
    return (
        <>
            <TopHeader />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
