import React, { useState } from 'react';
import { generateBioLubricantSuggestion } from '../utils/lubricantSuggestions';
import { Droplet, Leaf, ThermometerSun, DollarSign, BarChart, Award, Scale } from 'lucide-react';

function Suggestion() {
  const [lubricantType, setLubricantType] = useState('industrial');
  const [application, setApplication] = useState('');
  const [viscosity, setViscosity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [suggestion, setSuggestion] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = generateBioLubricantSuggestion({
      type: lubricantType,
      application,
      viscosity,
      temperature
    });
    setSuggestion(result);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Your Bio-Lubricant Alternative
          </h2>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lubricant Type
                  </label>
                  <select
                    value={lubricantType}
                    onChange={(e) => setLubricantType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="industrial">Industrial</option>
                    <option value="automotive">Automotive</option>
                    <option value="marine">Marine</option>
                    <option value="general">General Purpose</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application
                  </label>
                  <input
                    type="text"
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    placeholder="e.g., Gear lubrication, Hydraulic systems"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Viscosity Requirements
                  </label>
                  <input
                    type="text"
                    value={viscosity}
                    onChange={(e) => setViscosity(e.target.value)}
                    placeholder="e.g., SAE 30, ISO VG 46"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Operating Temperature
                  </label>
                  <input
                    type="text"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    placeholder="e.g., -20°C to 80°C"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Droplet className="w-5 h-5 mr-2" />
                  Get Eco-Friendly Suggestion
                </button>
              </div>
            </form>
          </div>

          {/* Results Section */}
          {suggestion && (
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              {/* Header */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2 mb-4">
                  <Droplet className="w-6 h-6" />
                  {suggestion.name}
                </h2>
                <p className="text-gray-700 text-lg">{suggestion.description}</p>
              </div>

              {/* Environmental Impact */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Environmental Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-green-700">Carbon Footprint</p>
                    <p className="text-gray-600">{suggestion.environmentalImpact.carbonReduction}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Biodegradability</p>
                    <p className="text-gray-600">{suggestion.environmentalImpact.biodegradabilityRate}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Toxicity Level</p>
                    <p className="text-gray-600">{suggestion.environmentalImpact.toxicityLevel}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Water Impact</p>
                    <p className="text-gray-600">{suggestion.environmentalImpact.waterPollutionReduction}</p>
                  </div>
                </div>
              </div>

              {/* Cost Analysis */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Cost Analysis
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-green-700">Initial Investment</p>
                    <p className="text-gray-600">{formatCurrency(suggestion.costAnalysis.initialCost)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Annual Savings</p>
                    <p className="text-gray-600">{formatCurrency(suggestion.costAnalysis.annualSavings)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Payback Period</p>
                    <p className="text-gray-600">{suggestion.costAnalysis.paybackPeriod}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">ROI</p>
                    <p className="text-gray-600">{suggestion.costAnalysis.roi}</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  Performance Metrics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-green-700">Wear Protection</p>
                    <p className="text-gray-600">{suggestion.performance.wearProtection}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Oxidation Stability</p>
                    <p className="text-gray-600">{suggestion.performance.oxidationStability}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Thermal Stability</p>
                    <p className="text-gray-600">{suggestion.performance.thermalStability}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Viscosity Index</p>
                    <p className="text-gray-600">{suggestion.performance.viscosityIndex}</p>
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Traditional vs Bio-based Comparison
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Traditional Lubricant</h4>
                    <ul className="space-y-2">
                      {suggestion.comparison.traditional.properties.map((prop, index) => (
                        <li key={index} className="text-gray-600">• {prop}</li>
                      ))}
                    </ul>
                    <h4 className="font-medium text-green-700 mt-4 mb-2">Limitations</h4>
                    <ul className="space-y-2">
                      {suggestion.comparison.traditional.limitations.map((limit, index) => (
                        <li key={index} className="text-gray-600">• {limit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Bio-based Lubricant</h4>
                    <ul className="space-y-2">
                      {suggestion.comparison.bio.properties.map((prop, index) => (
                        <li key={index} className="text-gray-600">• {prop}</li>
                      ))}
                    </ul>
                    <h4 className="font-medium text-green-700 mt-4 mb-2">Advantages</h4>
                    <ul className="space-y-2">
                      {suggestion.comparison.bio.advantages.map((adv, index) => (
                        <li key={index} className="text-gray-600">• {adv}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {suggestion.certifications.map((cert, index) => (
                    <span key={index} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Suggestion;