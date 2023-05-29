import styles from '@styles/Layout.module.scss';
import imageURL from '@images/bg.jpg'

type LayoutProps = {
  children?: JSX.Element;
};

function Layout({ children }: LayoutProps) {

  return (
    <div data-testid="layout" className={styles.container} style={{
      backgroundImage: `url(${imageURL})`,
    }}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
