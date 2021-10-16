import React from "react";
import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
