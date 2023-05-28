import styles from '@styles/Layout.module.scss';

type LayoutProps = {
  children?: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <div data-testid="layout" className={styles.container}>
      {children}
    </div>
  );
}

export default Layout;
