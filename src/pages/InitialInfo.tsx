import Layout from '@components/Layout';
import UserForm from '@components/UserForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import appStore from '@store/appStore';
import useStepper from '@hooks/useStepper';
import Stepper from '@components/Stepper';

function InitialInfo() {
  const { t } = useTranslation();
  const { setUserInfo, user } = appStore();
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
    <Layout pageTitle={t('initialInfo.title')}>
      <Stepper>
        <UserForm saveData={next} defaultValues={user} />
      </Stepper>
    </Layout>
  );
}

export default InitialInfo;
