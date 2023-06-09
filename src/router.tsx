import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/home';
import InitialInfo from './pages/InitialInfo';
import Password from './pages/Password';
import Review from './pages/Review';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/initial-info" element={<InitialInfo />} />
      <Route path="/password" element={<Password />} />
      <Route path="/review" element={<Review />} />
      <Route path="/*" element={<Navigate to="/initial-info" />} />
    </Routes>
  );
};

export default Router;
