
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
          <Nav></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
          <ToastContainer />
        </div>
    );
};

export default Root;