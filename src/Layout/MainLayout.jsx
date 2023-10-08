import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";

const MainLayout = () => {
    return (
        <>
        <Nav></Nav>
        <Outlet></Outlet>
        </>
    );
};

export default MainLayout;