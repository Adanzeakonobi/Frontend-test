import {Routes, Route} from 'react-router-dom'
import FrontEndDeveloperTest from './pages/FrontEndDeveloperTesr';
import GettingStarted from './pages/GettingStarted';
import FirstPage from './pages/FirstPage';
import Navigation from './components/layouts/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/Getting-started' element={<GettingStarted />} />
      <Route path='/Getting-started/frontend-test' element={<FrontEndDeveloperTest />} />
      </Routes>
    </div>
  );
}

export default App;
