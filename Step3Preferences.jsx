const Step3Preferences = ({ formData, handleChange, prevStep, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Preferences</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Theme Preference</label>
        <div className="flex space-x-4">
          {['light', 'dark', 'system'].map(theme => (
            <div key={theme} className="flex items-center">
              <input
                type="radio"
                id={`theme-${theme}`}
                name="theme"
                value={theme}
                checked={formData.theme === theme}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`theme-${theme}`} className="capitalize">{theme}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Dashboard Layout</label>
        <div className="grid grid-cols-2 gap-4">
          {['standard', 'compact', 'detailed', 'minimal'].map(layout => (
            <div 
              key={layout} 
              className={`p-4 border rounded-lg cursor-pointer transition duration-200 
                ${formData.dashboardLayout === layout ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
              onClick={() => handleChange({ target: { name: 'dashboardLayout', value: layout } })}
            >
              <input
                type="radio"
                id={`layout-${layout}`}
                name="dashboardLayout"
                value={layout}
                checked={formData.dashboardLayout === layout}
                onChange={handleChange}
                className="hidden"
              />
              <label htmlFor={`layout-${layout}`} className="capitalize">{layout}</label>
              <div className="mt-2 flex space-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-2 bg-gray-200 rounded" style={{ width: `${20 + i * 10}px` }}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
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
          Complete Onboarding
        </button>
      </div>
    </form>
  );
};

export default Step3Preferences;
