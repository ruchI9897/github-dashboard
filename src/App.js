import { useState } from 'react';
import './App.css';
import RepositoryView from './Pages/RepositoryView';
import UserDashboard from './Pages/UserDashboard';
import Search from './components/Search';
import  { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import UserContext from './UserContext';
import { AppContainer, Container } from './styling';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };

  return (
    <Container>
      <UserContext.Provider value={value}>
        <AppContainer>
            <Router>
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/user/*" element={<UserDashboard />} />
                    <Route path="/repo/*" element={<RepositoryView />} />
                </Routes>
            </Router>
        </AppContainer>
      </UserContext.Provider>
    </Container>
  );
}

export default App;

