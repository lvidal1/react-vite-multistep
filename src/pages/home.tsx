import Layout from '@components/Layout';
import { useTranslation } from 'react-i18next';
import useWizard from '@hooks/useWizard';
import { useNavigate } from 'react-router-dom';
import HomeForm from '@components/HomeForm';
import appStore from '@store/appStore';

function Home() {
  const { t } = useTranslation();
  const { getInitialStep } = useWizard();
  const { user, clear, completed } = appStore();
  const navigate = useNavigate();

  const handleStart = () => {
    const initialStep = getInitialStep();
    if (initialStep) {
      clear();
      navigate(initialStep);
    }
  };

  return (
    <Layout title={t('home.title')} copy={t('home.copy')}>
      <HomeForm userInfo={user} wizardCompleted={completed()} start={handleStart} />
    </Layout>
  );
}

export default Home;
