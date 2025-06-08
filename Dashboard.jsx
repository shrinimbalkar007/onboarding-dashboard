import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoCard from '../components/Dashboard/InfoCard';
import ProgressChart from '../components/Dashboard/ProgressChart';

const Dashboard = ({ userData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/onboarding');
    }
  }, [userData, navigate]);

  if (!userData) return null;

  // Mock data for dashboard
  const dashboardData = {
    teamMembers: 12,
    activeProjects: 5,
    notifications: 3,
    weeklyProgress: [
      { day: 'Mon', progress: 40 },
      { day: 'Tue', progress: 60 },
      { day: 'Wed', progress: 55 },
      { day: 'Thu', progress: 75 },
      { day: 'Fri', progress: 65 },
      { day: 'Sat', progress: 45 },
      { day: 'Sun', progress: 30 },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {userData.name}!</h1>
          <p className="text-gray-600">{userData.companyName} • {userData.industry}</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoCard 
            title="Team Members" 
            value={dashboardData.teamMembers} 
            icon="👥" 
            color="bg-blue-100 text-blue-800" 
          />
          <InfoCard 
            title="Active Projects" 
            value={dashboardData.activeProjects} 
            icon="📋" 
            color="bg-green-100 text-green-800" 
          />
          <InfoCard 
            title="Notifications" 
            value={dashboardData.notifications} 
            icon="🔔" 
            color="bg-yellow-100 text-yellow-800" 
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Progress</h2>
          <div className="h-64">
            <ProgressChart data={dashboardData.weeklyProgress} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-700">Theme</h3>
              <p className="capitalize">{userData.theme}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Dashboard Layout</h3>
              <p className="capitalize">{userData.dashboardLayout}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
