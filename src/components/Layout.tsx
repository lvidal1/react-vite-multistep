import styles from '@styles/Layout.module.scss';
import imageURL from '@images/bg.jpg';
import Navigation from './Navigation';

type LayoutProps = {
  children?: JSX.Element | string;
  title?: string | null;
  copy?: string | null;
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
      <Navigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
