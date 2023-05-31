import Layout from '@components/Layout';
import { useTranslation } from 'react-i18next';
import useWizard from '../hooks/useWizard';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';

function Home() {
  const { t } = useTranslation();
  const { getInitialStep } = useWizard();
  const navigate = useNavigate();

  const handleAccess = () => {
    const initialStep = getInitialStep();
    if (initialStep) {
      navigate(initialStep);
    }
  };
  return (
    <Layout title={t('home.title')} copy={t('home.copy')}>
      <Button onClick={handleAccess} label={'Access wizard'} />
    </Layout>
  );
}

export default Home;
