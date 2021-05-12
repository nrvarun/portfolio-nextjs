import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <p className={style.copyright}>
        © {new Date().getFullYear()} | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
