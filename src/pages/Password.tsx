import Layout from '@components/Layout';
import UserForm from '@components/UserForm';
import { useTranslation } from 'react-i18next';
import appStore from '../store/appStore';

function Password() {
  const { t } = useTranslation();
  const { setUserInfo, user } = appStore();

  const next = (data: any) => {
    setUserInfo(data);
  };

  return (
    <Layout title={t('password.title')} copy={t('password.copy')}>
      <UserForm saveData={next} defaultValues={user} />
    </Layout>
  );
}

export default Password;
