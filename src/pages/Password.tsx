import Layout from '@components/Layout';
import PasswordForm from '@components/PasswordForm';
import { useTranslation } from 'react-i18next';
import appStore from '../store/appStore';

function Password() {
  const { t } = useTranslation();
  const { setUserInfo } = appStore();

  const next = (data: any) => {
    setUserInfo(data);
  };

  return (
    <Layout title={t('password.title')} copy={t('password.copy')}>
      <PasswordForm saveData={next} />
    </Layout>
  );
}

export default Password;
