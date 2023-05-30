import Layout from '@components/Layout';
import PersonalForm from '@components/PersonalForm';
import { useTranslation } from 'react-i18next';

function InitialInfo() {
  const { t } = useTranslation();

  const next = (data: any) => {
    console.log(data);
  };

  return (
    <Layout title={t('initialInfo.title')} copy={t('initialInfo.copy')}>
      <PersonalForm saveData={next} />
    </Layout>
  );
}

export default InitialInfo;
