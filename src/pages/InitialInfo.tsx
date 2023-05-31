import Layout from '@components/Layout';
import UserForm from '@components/UserForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import appStore from '@store/appStore';
import useWizard from '@hooks/useWizard';
import Wizard from '@components/Wizard';

function InitialInfo() {
  const { t } = useTranslation();
  const { setUserInfo, user } = appStore();
  const { getNextStep } = useWizard();
  const navigate = useNavigate();

  const next = (data: any) => {
    setUserInfo(data);
    const nextStep = getNextStep();
    if (nextStep) {
      navigate(nextStep);
    }
  };

  return (
    <Layout title={t('initialInfo.title')} copy={t('initialInfo.copy')}>
      <Wizard>
        <UserForm saveData={next} defaultValues={user} />
      </Wizard>
    </Layout>
  );
}

export default InitialInfo;
