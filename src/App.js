import {Routes, Route} from 'react-router-dom'
import FirstPage from './pages/FirstPage';
import Navigation from './components/layouts/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
      <Route path='/' element={<FirstPage />} />
      </Routes>
    </div>
  );
}

export default App;
