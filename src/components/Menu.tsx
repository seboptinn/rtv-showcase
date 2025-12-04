import classes from "./Menu.module.css";

export const Menu = () => {
  return (
    <nav className={classes.menu}>
      <span>
        <a href="/">Hjem</a>
      </span>
      <span>
        <a href="/about">Om oss</a>
      </span>
    </nav>
  );
};
