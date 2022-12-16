import React, { useContext, useEffect } from "react";
import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import { Context } from "./ContextProvider";

const Header = () => {
  const {night, setNight} = useContext(Context)
  return (
    <header className="header">
      <div className="container header-flex">
        <div>
          <a href="/" className="text">
            <h1>Where in the world?</h1>
          </a>
        </div>
        <div>
          <div className="mode text">
            <span className="icon">
              {night ? <BsFillMoonFill />: <BsMoon />}
            </span>
            <span className="dark-mode-btn" 
            onClick={() => {
              setNight(!night);
              localStorage.countryMode= !night
            }}
            >Dark Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
