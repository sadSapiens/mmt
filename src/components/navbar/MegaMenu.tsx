import React, { useState } from "react";
import "./megamenu.css";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="content">
      <ul className="exo-menu" onClick={() => setOpen(true)}>
        <li className="drop-down">
          <a href="#">
            <i className="fa fa-cogs"></i> Flyout
          </a>
          <ul className="drop-down-ul animated fadeIn">
            <li className="flyout-right">
              <a href="#">Flyout Right</a>
              {/* <!--Flyout Right--> */}
              <ul className="animated fadeIn">
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">Computer</a>
                </li>
                <li>
                  <a href="#">Watch</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">No Flyout</a>
            </li>
          </ul>
          {/* <!--//End drop down--> */}
        </li>

        {/* <a href="#" className="toggle-menu visible-xs-block">
          |||
        </a> */}
      </ul>
    </div>
  );
};

export default MegaMenu;
