import Layout from '@components/Layout';
import UserForm from '@components/UserForm';
import { useTranslation } from 'react-i18next';
import appStore from '../store/appStore';

function InitialInfo() {
  const { t } = useTranslation();
  const { setUserInfo, user } = appStore();

  const next = (data: any) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <Layout title={t('initialInfo.title')} copy={t('initialInfo.copy')}>
      <UserForm saveData={next} defaultValues={user} />
    </Layout>
  );
}

export default InitialInfo;
