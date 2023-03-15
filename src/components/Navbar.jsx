import { MenuItem, Select } from "@mui/material";
import React from "react";
import Dropdown from "./coreComponentd/Dropdown";
import style from "./style.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Navbar() {
  const loginBtn = () => {};
  return (
    <div>
      <div className={style.nav}>
        <button onClick={loginBtn} className={style.home}>
          <b>Mome</b>
        </button>
        <input
          placeholder="Serch for product brand and more"
          className={style.Navbar_Input}
        />

        <div className={style.dropdown}>
          <Dropdown />
        </div>

        <button onClick={loginBtn} className={style.Login}>
          <b>Login</b>
        </button>
        {/* <h4 className={style.Becomeh3}>Become a Saller</h4> */}
        <label className={style.more_label}></label>
        <ShoppingCartIcon className={style.cartIcon} />
      </div>
    </div>
  );
}

export default Navbar;
