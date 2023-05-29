import Layout from '@components/Layout';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <Layout title={t('home.title')} copy={t('home.copy')}>
      Home
    </Layout>
  );
}

export default Home;
