import styles from '@styles/components/Layout.module.scss';
import imageURL from '@images/bg.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type LayoutProps = {
  children?: JSX.Element | string;
  pageTitle?: string | null;
};

function Layout({ children, pageTitle }: LayoutProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      data-testid="layout"
      className={styles.container}
      style={{
        backgroundImage: `url(${imageURL})`
      }}>
      <header className={styles.header}>
        <h1 className={styles.title} onClick={() => navigate('/')}>
          {t('web.title')}
        </h1>
        <p className={styles.pageTitle}>{pageTitle}</p>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
