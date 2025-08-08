import React from 'react';
import { Users, Shield, TrendingUp, AlertTriangle, Calendar, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockCoverageStats, mockInfectionData } from '../data/mockData';

const Dashboard: React.FC = () => {
  const totalVaccinated = mockCoverageStats.reduce((sum, stat) => sum + stat.vaccinatedCount, 0);
  const totalPopulation = mockCoverageStats.reduce((sum, stat) => sum + stat.totalPopulation, 0);
  const averageCoverage = totalPopulation > 0 ? (totalVaccinated / totalPopulation) * 100 : 0;
  const activeCases = mockInfectionData.reduce((sum, data) => sum + data.activeCase, 0);

  const recentActivities = [
    { id: 1, action: 'New vaccination record added', time: '2 hours ago', type: 'success' },
    { id: 2, action: 'Coverage data updated for Mumbai', time: '4 hours ago', type: 'info' },
    { id: 3, action: 'Reminder sent for upcoming vaccine', time: '6 hours ago', type: 'warning' },
    { id: 4, action: 'Outbreak alert generated', time: '1 day ago', type: 'error' }
  ];

  const upcomingVaccines = [
    { name: 'John Doe', vaccine: 'COVID-19 Booster', dueDate: '2024-01-20' },
    { name: 'Jane Smith', vaccine: 'Influenza', dueDate: '2024-01-22' },
    { name: 'Robert Johnson', vaccine: 'Hepatitis B', dueDate: '2024-01-25' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to VaksTrack - Your comprehensive vaccination management system
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Vaccinated</p>
              <p className="text-2xl font-bold text-gray-900">{totalVaccinated.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Coverage Rate</p>
              <p className="text-2xl font-bold text-gray-900">{averageCoverage.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Cases</p>
              <p className="text-2xl font-bold text-gray-900">{activeCases.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Vaccines</p>
              <p className="text-2xl font-bold text-gray-900">{upcomingVaccines.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'info' ? 'bg-blue-500' :
                  activity.type === 'warning' ? 'bg-orange-500' : 'bg-red-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Vaccines */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Vaccines</h3>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingVaccines.map((vaccine, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="text-sm font-medium text-gray-900">{vaccine.name}</p>
                  <p className="text-xs text-gray-500">{vaccine.vaccine}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-600 font-medium">{vaccine.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/vaccination-schedule"
            className="mt-4 block text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            View Full Schedule →
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/add-data"
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            <div className="p-2 bg-blue-100 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">Add Vaccination Record</p>
              <p className="text-sm text-gray-600">Record a new vaccination</p>
            </div>
          </Link>

          <Link
            to="/individuals"
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
          >
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">Manage Individuals</p>
              <p className="text-sm text-gray-600">Add or edit individual records</p>
            </div>
          </Link>

          <Link
            to="/statistics"
            className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
          >
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">View Statistics</p>
              <p className="text-sm text-gray-600">Analyze vaccination data</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;