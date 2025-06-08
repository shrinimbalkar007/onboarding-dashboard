import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';

function App() {
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : null;
  });

  const handleOnboardingComplete = (data) => {
    setUserData(data);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={userData ? <Navigate to="/dashboard" /> : <Navigate to="/onboarding" />} 
        />
        <Route 
          path="/onboarding" 
          element={
            userData ? 
              <Navigate to="/dashboard" /> : 
              <Onboarding onComplete={handleOnboardingComplete} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={userData ? <Dashboard userData={userData} /> : <Navigate to="/onboarding" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
