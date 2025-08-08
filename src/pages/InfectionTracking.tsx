import React, { useState } from 'react';
import { mockInfectionData } from '../data/mockData';
import { Activity, TrendingUp, AlertTriangle, Users, MapPin, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const InfectionTracking: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<string>('COVID-19');
  const [selectedState, setSelectedState] = useState<string>('All');

  const diseases = [...new Set(mockInfectionData.map(data => data.disease))];
  const states = [...new Set(mockInfectionData.map(data => data.state))];

  const filteredData = mockInfectionData.filter(data => {
    const diseaseMatch = selectedDisease === 'All' || data.disease === selectedDisease;
    const stateMatch = selectedState === 'All' || data.state === selectedState;
    return diseaseMatch && stateMatch;
  });

  const totalCases = filteredData.reduce((sum, data) => sum + data.confirmedCases, 0);
  const totalRecovered = filteredData.reduce((sum, data) => sum + data.recoveredCases, 0);
  const totalDeaths = filteredData.reduce((sum, data) => sum + data.deaths, 0);
  const totalActive = filteredData.reduce((sum, data) => sum + data.activeCase, 0);

  const recoveryRate = totalCases > 0 ? (totalRecovered / totalCases) * 100 : 0;
  const mortalityRate = totalCases > 0 ? (totalDeaths / totalCases) * 100 : 0;

  const chartData = filteredData.map(data => ({
    location: `${data.district}, ${data.state}`,
    confirmed: data.confirmedCases,
    recovered: data.recoveredCases,
    deaths: data.deaths,
    active: data.activeCase
  }));

  // Mock trend data
  const trendData = [
    { date: '2024-01-01', confirmed: 95000, recovered: 90000, deaths: 1800, active: 3200 },
    { date: '2024-01-02', confirmed: 96200, recovered: 91100, deaths: 1820, active: 3280 },
    { date: '2024-01-03', confirmed: 97500, recovered: 92300, deaths: 1840, active: 3360 },
    { date: '2024-01-04', confirmed: 98800, recovered: 93500, deaths: 1860, active: 3440 },
    { date: '2024-01-05', confirmed: 100200, recovered: 94800, deaths: 1880, active: 3520 }
  ];

  const riskLevel = totalActive > 20000 ? 'High' : totalActive > 10000 ? 'Medium' : 'Low';
  const riskColor = riskLevel === 'High' ? 'text-red-600 bg-red-100' : 
                   riskLevel === 'Medium' ? 'text-orange-600 bg-orange-100' : 
                   'text-green-600 bg-green-100';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Infection Tracking</h1>
        <p className="text-gray-600 mt-2">
          Real-time disease surveillance and outbreak monitoring
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Disease</label>
            <select
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Diseases</option>
              {diseases.map(disease => (
                <option key={disease} value={disease}>{disease}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All States</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Confirmed</p>
              <p className="text-1xl font-bold text-blue-600">{totalCases.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Recovered</p>
              <p className="text-1xl font-bold text-green-600">{totalRecovered.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Deaths</p>
              <p className="text-1xl font-bold text-red-600">{totalDeaths.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-1xl font-bold text-orange-600">{totalActive.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${riskColor.includes('red') ? 'bg-red-100' : riskColor.includes('orange') ? 'bg-orange-100' : 'bg-green-100'}`}>
              <AlertTriangle className={`h-6 w-6 ${riskLevel === 'High' ? 'text-red-600' : riskLevel === 'Medium' ? 'text-orange-600' : 'text-green-600'}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Risk Level</p>
              <p className={`text-1xl font-bold ${riskLevel === 'High' ? 'text-red-600' : riskLevel === 'Medium' ? 'text-orange-600' : 'text-green-600'}`}>
                {riskLevel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recovery Rate</h3>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${recoveryRate}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-green-600">{recoveryRate.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mortality Rate</h3>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-red-600 h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${mortalityRate * 10}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-red-600">{mortalityRate.toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Cases by Location */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cases by Location</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="location" 
                angle={-45}
                textAnchor="end"
                height={100}
                fontSize={12}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="confirmed" fill="#3B82F6" name="Confirmed" />
              <Bar dataKey="recovered" fill="#10B981" name="Recovered" />
              <Bar dataKey="deaths" fill="#EF4444" name="Deaths" />
              <Bar dataKey="active" fill="#F59E0B" name="Active" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">5-Day Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date"
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Legend />
              <Line type="monotone" dataKey="confirmed" stroke="#3B82F6" strokeWidth={2} name="Confirmed" />
              <Line type="monotone" dataKey="recovered" stroke="#10B981" strokeWidth={2} name="Recovered" />
              <Line type="monotone" dataKey="active" stroke="#F59E0B" strokeWidth={2} name="Active" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Outbreak Risk Assessment */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Outbreak Risk Assessment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg border-2 ${riskLevel === 'Low' ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">Low Risk</h4>
              <div className={`w-3 h-3 rounded-full ${riskLevel === 'Low' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Active cases &lt; 10,000</p>
            <p className="text-sm text-gray-600">Normal surveillance protocols</p>
          </div>

          <div className={`p-4 rounded-lg border-2 ${riskLevel === 'Medium' ? 'border-orange-200 bg-orange-50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">Medium Risk</h4>
              <div className={`w-3 h-3 rounded-full ${riskLevel === 'Medium' ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Active cases 10,000 - 20,000</p>
            <p className="text-sm text-gray-600">Enhanced monitoring required</p>
          </div>

          <div className={`p-4 rounded-lg border-2 ${riskLevel === 'High' ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">High Risk</h4>
              <div className={`w-3 h-3 rounded-full ${riskLevel === 'High' ? 'bg-red-500' : 'bg-gray-300'}`}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Active cases &gt; 20,000</p>
            <p className="text-sm text-gray-600">Emergency response protocols</p>
          </div>
        </div>
      </div>

      {/* Detailed Data Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Detailed Infection Data</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Disease
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confirmed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recovered
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deaths
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((data) => (
                <tr key={data.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{data.district}</div>
                    <div className="text-sm text-gray-500">{data.state}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {data.disease}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                    {data.confirmedCases.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    {data.recoveredCases.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                    {data.deaths.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-medium">
                    {data.activeCase.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InfectionTracking;