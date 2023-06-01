import Layout from '@components/Layout';
import { useTranslation } from 'react-i18next';
import useWizard from '@hooks/useWizard';
import { useNavigate } from 'react-router-dom';
import HomeForm from '@components/HomeForm';
import appStore from '@store/appStore';

function Home() {
  const { t } = useTranslation();
  const { getInitialStep, getReviewStep } = useWizard();
  const { user, clear, completed } = appStore();
  const navigate = useNavigate();

  const handleStart = () => {
    const initialStep = getInitialStep();
    if (initialStep) {
      clear();
      navigate(initialStep);
    }
  };

  const handleReview = () => {
    const reviewStep = getReviewStep();
    if (reviewStep) {
      navigate(reviewStep);
    }
  };

  return (
    <Layout pageTitle={t('home.title')}>
      <HomeForm
        handleReview={handleReview}
        handleStart={handleStart}
        userInfo={user}
        wizardCompleted={completed()}
      />
    </Layout>
  );
}

export default Home;
