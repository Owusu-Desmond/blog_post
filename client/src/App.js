import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Posts from './components/posts';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { UserContextProvider } from './userContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Layout}>
            <Route index path='/' Component={Posts} />
            <Route path='/login' Component={LoginPage} />
            <Route path='/register' Component={RegisterPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
