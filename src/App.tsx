import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
