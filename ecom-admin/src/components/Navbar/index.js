import React from "react";
import Nav from "./navbar.module.css";

const Navbar = () => (
  <>
    <div className={Nav.navbar}>
      <div className={Nav.navbarDiv}>
        <div>
          <img
            src="https://d34fwl795uvawg.cloudfront.net/images/revv-app-logo.svg"
            alt="revv-logo"
            className={Nav.logo}
          />
          <span className={Nav.logoName}>ECOM ADMIN</span>
        </div>

        <div>
          <div className={`${Nav.globalTemplatesCategoriesSubCategories} ${Nav.boldText}`}>Global Templates</div>
          <div className={Nav.globalTemplatesCategoriesSubCategories}>Categories</div>
          <div className={Nav.globalTemplatesCategoriesSubCategories}>Sub-Categories</div>
        </div>
      </div>
    </div>
  </>
);
export default Navbar;
