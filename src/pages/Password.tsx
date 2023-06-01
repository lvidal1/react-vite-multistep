import Layout from '@components/Layout';
import PasswordForm from '@components/PasswordForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import appStore from '@store/appStore';
import useWizard from '@hooks/useWizard';
import Wizard from '@components/Wizard';

function Password() {
  const { t } = useTranslation();
  const { setUserInfo } = appStore();
  const { getNextStep } = useWizard();
  const navigate = useNavigate();

  const next = (data: any) => {
    setUserInfo(data);
    const nextStep = getNextStep();
    console.log(nextStep);
    if (nextStep) {
      navigate(nextStep);
    }
  };

  return (
    <Layout pageTitle={t('password.title')}>
      <Wizard>
        <PasswordForm saveData={next} />
      </Wizard>
    </Layout>
  );
}

export default Password;
