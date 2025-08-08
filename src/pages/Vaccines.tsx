import React, { useState } from 'react';
import { vaccines } from '../data/vaccines';
import { Shield, Clock, Users, AlertTriangle, Info, Calendar } from 'lucide-react';

const Vaccines: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'routine' | 'covid' | 'seasonal'>('all');
  const [selectedVaccine, setSelectedVaccine] = useState<string | null>(null);

  const filteredVaccines = vaccines.filter(vaccine => 
    selectedType === 'all' || vaccine.type === selectedType
  );

  const selectedVaccineDetails = selectedVaccine ? vaccines.find(v => v.id === selectedVaccine) : null;

  const getAgeFromGroup = (ageGroup: string) => {
    if (ageGroup.includes('weeks')) return 'Infant';
    if (ageGroup.includes('months')) return 'Infant/Child';
    if (ageGroup.includes('years') && !ageGroup.includes('18+')) return 'Child';
    if (ageGroup.includes('18+')) return 'Adult';
    return 'All Ages';
  };

  const getScheduleText = (vaccine: any) => {
    if (vaccine.doses === 1) return 'Single dose';
    return `${vaccine.doses} doses, ${vaccine.interval} days apart`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Vaccine Information</h1>
        <p className="text-gray-600 mt-2">
          Comprehensive information about vaccines, schedules, and recommendations
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All Vaccines' },
            { key: 'routine', label: 'Routine Immunization' },
            { key: 'covid', label: 'COVID-19' },
            { key: 'seasonal', label: 'Seasonal' }
          ].map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedType === type.key
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vaccine List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Available Vaccines ({filteredVaccines.length})
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredVaccines.map((vaccine) => (
                <div
                  key={vaccine.id}
                  className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
                    selectedVaccine === vaccine.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                  }`}
                  onClick={() => setSelectedVaccine(vaccine.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-5 w-5 text-blue-600" />
                        <h4 className="text-lg font-semibold text-gray-900">{vaccine.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          vaccine.type === 'routine' ? 'bg-green-100 text-green-800' :
                          vaccine.type === 'covid' ? 'bg-red-100 text-red-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {vaccine.type.charAt(0).toUpperCase() + vaccine.type.slice(1)}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{vaccine.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {getAgeFromGroup(vaccine.ageGroups[0])}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {getScheduleText(vaccine)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Info className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{vaccine.manufacturer}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{vaccine.doses}</div>
                        <div className="text-xs text-gray-500">
                          {vaccine.doses === 1 ? 'dose' : 'doses'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vaccine Details */}
        <div className="space-y-6">
          {selectedVaccineDetails ? (
            <>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vaccine Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Age Groups</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedVaccineDetails.ageGroups.map((group, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {group}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Schedule</h4>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">Total Doses: {selectedVaccineDetails.doses}</span>
                      </div>
                      {selectedVaccineDetails.doses > 1 && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Interval: {selectedVaccineDetails.interval} days between doses</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Manufacturer</h4>
                    <p className="text-sm text-gray-600">{selectedVaccineDetails.manufacturer}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Side Effects</h3>
                <div className="space-y-2">
                  {selectedVaccineDetails.sideEffects.map((effect, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{effect}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contraindications</h3>
                <div className="space-y-2">
                  {selectedVaccineDetails.contraindications.map((contraindication, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{contraindication}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Vaccine</h3>
              <p className="text-gray-600">
                Click on any vaccine from the list to view detailed information, schedules, and recommendations.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Vaccination Schedule Guide */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Indian National Immunization Schedule</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Age</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Vaccine</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Disease Prevented</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">Birth</td>
                <td className="py-3 px-4 text-sm text-gray-900">BCG, Hepatitis B-1</td>
                <td className="py-3 px-4 text-sm text-gray-600">Tuberculosis, Hepatitis B</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">6 weeks</td>
                <td className="py-3 px-4 text-sm text-gray-900">DPT-1, OPV-1, Hepatitis B-2</td>
                <td className="py-3 px-4 text-sm text-gray-600">Diphtheria, Pertussis, Tetanus, Polio, Hepatitis B</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">10 weeks</td>
                <td className="py-3 px-4 text-sm text-gray-900">DPT-2, OPV-2</td>
                <td className="py-3 px-4 text-sm text-gray-600">Diphtheria, Pertussis, Tetanus, Polio</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">14 weeks</td>
                <td className="py-3 px-4 text-sm text-gray-900">DPT-3, OPV-3, Hepatitis B-3</td>
                <td className="py-3 px-4 text-sm text-gray-600">Diphtheria, Pertussis, Tetanus, Polio, Hepatitis B</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">9 months</td>
                <td className="py-3 px-4 text-sm text-gray-900">MMR-1</td>
                <td className="py-3 px-4 text-sm text-gray-600">Measles, Mumps, Rubella</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">15-18 months</td>
                <td className="py-3 px-4 text-sm text-gray-900">MMR-2, DPT Booster</td>
                <td className="py-3 px-4 text-sm text-gray-600">Measles, Mumps, Rubella, Diphtheria, Pertussis, Tetanus</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">18+ years</td>
                <td className="py-3 px-4 text-sm text-gray-900">COVID-19, Influenza (Annual)</td>
                <td className="py-3 px-4 text-sm text-gray-600">COVID-19, Seasonal Influenza</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vaccines;