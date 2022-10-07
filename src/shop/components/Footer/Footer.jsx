import classes from "./Footer.module.css";

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className={classes.footer__container}>
            <p>This site was developed by Luciano Leyria - { date } </p>
        </div>
    );
};
