import Layout from '@components/Layout';
import ReviewForm from '@components/ReviewForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import appStore from '../store/appStore';
import useWizard from '../hooks/useWizard';

function Review() {
  const { t } = useTranslation();
  const { user } = appStore();
  const { getNextStep } = useWizard();
  const navigate = useNavigate();

  const next = () => {
    const nextStep = getNextStep();
    if (nextStep) {
      navigate(nextStep);
    }
  };

  return (
    <Layout title={t('review.title')} copy={t('review.copy')}>
      <ReviewForm saveData={next} defaultValues={user} />
    </Layout>
  );
}

export default Review;
