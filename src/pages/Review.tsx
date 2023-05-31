import Layout from '@components/Layout';
import PasswordForm from '@components/PasswordForm';
import { useTranslation } from 'react-i18next';

function Review() {
  const { t } = useTranslation();

  const next = () => {
    console.log('Complete');
  };

  return (
    <Layout title={t('review.title')} copy={t('review.copy')}>
      <PasswordForm saveData={next} />
    </Layout>
  );
}

export default Review;
