const Step2BusinessInfo = ({ formData, handleChange, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.companySize) newErrors.companySize = 'Company size is required';
    return newErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Business Information</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="companyName">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Acme Inc."
        />
        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="industry">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg ${errors.industry ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select your industry</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="retail">Retail</option>
          <option value="other">Other</option>
        </select>
        {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Company Size</label>
        <div className="space-y-2">
          {['1-10', '11-50', '51-200', '201-500', '500+'].map(size => (
            <div key={size} className="flex items-center">
              <input
                type="radio"
                id={`size-${size}`}
                name="companySize"
                value={size}
                checked={formData.companySize === size}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`size-${size}`}>{size} employees</label>
            </div>
          ))}
        </div>
        {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2BusinessInfo;
