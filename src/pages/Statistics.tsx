import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { mockCoverageStats } from '../data/mockData';
import { TrendingUp, Users, Shield, MapPin } from 'lucide-react';

const Statistics: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'coverage' | 'vaccinated' | 'population'>('coverage');

  const chartData = mockCoverageStats.map(stat => ({
    location: `${stat.district}, ${stat.state}`,
    coverage: stat.coveragePercentage,
    vaccinated: stat.vaccinatedCount,
    population: stat.totalPopulation,
    unvaccinated: stat.totalPopulation - stat.vaccinatedCount
  }));

  const pieData = mockCoverageStats.map(stat => ({
    name: stat.district,
    value: stat.vaccinatedCount,
    percentage: stat.coveragePercentage
  }));

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const trendData = [
    { month: 'Jan', coverage: 65 },
    { month: 'Feb', coverage: 68 },
    { month: 'Mar', coverage: 72 },
    { month: 'Apr', coverage: 75 },
    { month: 'May', coverage: 78 },
    { month: 'Jun', coverage: 82 },
    { month: 'Jul', coverage: 85 },
    { month: 'Aug', coverage: 87 },
    { month: 'Sep', coverage: 89 },
    { month: 'Oct', coverage: 91 },
    { month: 'Nov', coverage: 89 },
    { month: 'Dec', coverage: 88 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Statistics & Graphs</h1>
        <p className="text-gray-600 mt-2">
          Comprehensive vaccination coverage analysis and trends
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Population</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockCoverageStats.reduce((sum, stat) => sum + stat.totalPopulation, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Vaccinated</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockCoverageStats.reduce((sum, stat) => sum + stat.vaccinatedCount, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Coverage</p>
              <p className="text-2xl font-bold text-gray-900">
                {(mockCoverageStats.reduce((sum, stat) => sum + stat.coveragePercentage, 0) / mockCoverageStats.length).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <MapPin className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Locations</p>
              <p className="text-2xl font-bold text-gray-900">{mockCoverageStats.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Coverage by Location */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Coverage by Location</h3>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value as any)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value="coverage">Coverage %</option>
              <option value="vaccinated">Vaccinated Count</option>
              <option value="population">Total Population</option>
            </select>
          </div>
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
              <Bar 
                dataKey={selectedMetric} 
                fill="#3B82F6" 
                name={
                  selectedMetric === 'coverage' ? 'Coverage %' :
                  selectedMetric === 'vaccinated' ? 'Vaccinated' : 'Population'
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Distribution Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Vaccination Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage.toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: any) => [value.toLocaleString(), 'Vaccinated']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Coverage Trend */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Coverage Trend (2024)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[60, 95]} />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="coverage" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              name="Coverage %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Statistics Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Detailed Coverage Statistics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Population
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vaccinated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coverage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockCoverageStats.map((stat, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{stat.district}</div>
                    <div className="text-sm text-gray-500">{stat.state}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {stat.totalPopulation.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {stat.vaccinatedCount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900 mr-2">
                        {stat.coveragePercentage}%
                      </div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${stat.coveragePercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(stat.lastUpdated).toLocaleDateString()}
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

export default Statistics;