import Layout from '@components/Layout';
import PasswordForm from '@components/PasswordForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import appStore from '@store/appStore';
import useStepper from '@hooks/useStepper';
import Stepper from '@components/Stepper';

function Password() {
  const { t } = useTranslation();
  const { setUserInfo } = appStore();
  const { getNextStep } = useStepper();
  const navigate = useNavigate();

  const next = (data: any) => {
    setUserInfo(data);
    const nextStep = getNextStep();
    if (nextStep) {
      navigate(nextStep);
    }
  };

  return (
    <Layout pageTitle={t('password.title')}>
      <Stepper>
        <PasswordForm saveData={next} />
      </Stepper>
    </Layout>
  );
}

export default Password;
