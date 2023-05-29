import styles from '@styles/Layout.module.scss';
import imageURL from '@images/bg.jpg';

type LayoutProps = {
  children?: JSX.Element;
  title?: string;
  copy?: string;
};

function Layout({ children, title, copy }: LayoutProps) {
  return (
    <div
      data-testid="layout"
      className={styles.container}
      style={{
        backgroundImage: `url(${imageURL})`
      }}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.copy}>{copy}</p>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
