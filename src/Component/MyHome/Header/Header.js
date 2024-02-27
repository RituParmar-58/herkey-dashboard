import React from "react";
import "./style.css";
import HerKey from '../../../assets/logo_herkey.png'
import MenuSVG from '../../../assets/menu.png'
import Forever21SVG from '../../../assets/forever21.png'
const Header = () => {
    return <div className="header-container">
        <div className="header">
      <div className="logo">
        <img src={HerKey} alt="herkey-logo" className="herkey-logo"/>
        <img src={MenuSVG} alt="menu-icon" />
      </div>
      <div className="buttons">
        <div >Dashboard</div>
        <div >Packages</div>
        <div >Events</div>
        <div >Blogs</div>
      </div>
      <img src={Forever21SVG} alt = "forever21-icon" className="forever21-logo"/>
    </div>
    </div>
}

export default Header