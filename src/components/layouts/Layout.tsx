import { Outlet, useLocation } from "react-router-dom";
import MainBar from "../navigation/MainBar";
import Brand from "../brand/brand";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  
  return(
    <>
      <MainBar />
      <div className="corporate-layout">
        <div className="heading-corporate">
          <h2 
          className="heading-sub u-center-text">Recuperamos cartera</h2>
          <h2 
          className="heading-sub u-center-text">sin demandas ni procesos</h2>
          <Brand animated={true} />
        </div>
        <div className="corporate-content-container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout;
