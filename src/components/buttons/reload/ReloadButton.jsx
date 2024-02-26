import React from "react";
import "./ReloadButton.css";
import { IoReloadCircle } from "react-icons/io5";

function ReloadButton({onReload}) {

    const handleReload = () =>{
        onReload()
    }
    
  return (
    <div className="reload-btn">
      <button>
        {" "}
        <IoReloadCircle onClick={handleReload} size={60} color="#FFF" />
      </button>
    </div>
  );
}

export default ReloadButton;
