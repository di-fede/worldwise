import styles from "./Footer.module.css";

function Footer() {
    return (
        <div>
            <footer className={styles.footer}>Footer</footer>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by WordWise Inc{" "}
            </p>
        </div>
    );
}

export default Footer;
