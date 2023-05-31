import Layout from '@components/Layout';
import ReviewForm from '@components/ReviewForm';
import { useTranslation } from 'react-i18next';
import appStore from '../store/appStore';

function Review() {
  const { t } = useTranslation();
  const { user } = appStore();

  const next = () => {
    console.log('Complete');
  };

  return (
    <Layout title={t('review.title')} copy={t('review.copy')}>
      <ReviewForm saveData={next} defaultValues={user} />
    </Layout>
  );
}

export default Review;
