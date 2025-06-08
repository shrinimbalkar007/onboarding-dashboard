import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/Onboarding/ProgressBar';
import Step1PersonalInfo from '../components/Onboarding/Step1PersonalInfo';
import Step2BusinessInfo from '../components/Onboarding/Step2BusinessInfo';
import Step3Preferences from '../components/Onboarding/Step3Preferences';

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    // Step 2
    companyName: '',
    industry: '',
    companySize: '',
    // Step 3
    theme: 'light',
    dashboardLayout: 'standard',
  });
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    onComplete(formData);
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1PersonalInfo 
            formData={formData} 
            handleChange={handleChange} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <Step2BusinessInfo 
            formData={formData} 
            handleChange={handleChange} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 3:
        return (
          <Step3Preferences 
            formData={formData} 
            handleChange={handleChange} 
            prevStep={prevStep} 
            handleSubmit={handleSubmit} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <ProgressBar currentStep={step} totalSteps={3} />
        <div className="mt-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
