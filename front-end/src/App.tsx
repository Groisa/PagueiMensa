import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomeView';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  );
  
}

export default App;
