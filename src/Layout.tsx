import { Outlet } from "react-router-dom";
import TopHeader from "./shared/components/TopHeader";

const Layout = () => {
    return (
        <>
            <TopHeader />
            <Outlet />
        </>
    );
};

export default Layout;
