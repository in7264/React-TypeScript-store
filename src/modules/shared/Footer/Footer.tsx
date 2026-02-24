import logo from '../../../assets/Logo.png';
import ArrowUp from '../../../assets/Arrow UP.svg?react';
import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footer}>
      <img className={styles.footer__logo} src={logo} alt="Logo" />
      <div className={styles.footer__links}>
        <a href="https://github.com/in7264/React-TypeScript-store">Github</a>
        <a href="https://github.com/in7264/React-TypeScript-store">Contacts</a>
        <a href="https://github.com/in7264/React-TypeScript-store">rights</a>
      </div>
      <div className={styles.footer__backToTop} onClick={scrollToTop}>
        Back to top
        <ArrowUp className={styles.footer__backToTopIcon} />
      </div>
    </div>
  );
};
