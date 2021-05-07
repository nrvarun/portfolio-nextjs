import style from "./footer.module.scss";

import React from "react";

const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <p className={style.copyright}>© 2019 | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
