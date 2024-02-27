import React from "react";
import "./styles.css";
import ArrowBackSVG from "../../assets/back_arrow.png"

const ComponetHeader = ({ activePage, onBackClick }) => {
   
  return (
    <div className="header-section">
      <div className="comp-header">   
        <div className="active-page">
          <span>Dashboard | </span><span style={{color:'blue'}}>{activePage}</span> 
        </div>
      <div className="box2" onClick={onBackClick}><img className="back-icon" src={ArrowBackSVG} alt="back-icon"></img> <p>{activePage}</p></div></div>
    </div>
  );
}

export default ComponetHeader;
