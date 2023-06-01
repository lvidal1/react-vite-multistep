import Layout from '@components/Layout';
import ReviewForm from '@components/ReviewForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import appStore from '@store/appStore';
import useStepper from '@hooks/useStepper';
import Stepper from '@components/Stepper';

function Review() {
  const { t } = useTranslation();
  const { user } = appStore();
  const { getNextStep } = useStepper();
  const navigate = useNavigate();

  const next = () => {
    const nextStep = getNextStep();
    if (nextStep) {
      navigate(nextStep);
    }
  };

  return (
    <Layout pageTitle={t('review.title')}>
      <Stepper>
        <ReviewForm saveData={next} defaultValues={user} />
      </Stepper>
    </Layout>
  );
}

export default Review;
