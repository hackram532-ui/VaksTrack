import { CoverageStats, InfectionData } from '../types';

export const mockCoverageStats: CoverageStats[] = [
  {
    state: 'Maharashtra',
    district: 'Mumbai',
    totalPopulation: 12442373,
    vaccinatedCount: 10854217,
    coveragePercentage: 87.2,
    vaccineType: 'COVID-19',
    lastUpdated: '2024-01-15'
  },
  {
    state: 'Karnataka',
    district: 'Bangalore',
    totalPopulation: 8443675,
    vaccinatedCount: 7598408,
    coveragePercentage: 89.9,
    vaccineType: 'COVID-19',
    lastUpdated: '2024-01-15'
  },
  {
    state: 'Delhi',
    district: 'Central Delhi',
    totalPopulation: 1648000,
    vaccinatedCount: 1482400,
    coveragePercentage: 89.9,
    vaccineType: 'COVID-19',
    lastUpdated: '2024-01-15'
  },
  {
    state: 'Tamil Nadu',
    district: 'Chennai',
    totalPopulation: 7088000,
    vaccinatedCount: 6195040,
    coveragePercentage: 87.4,
    vaccineType: 'COVID-19',
    lastUpdated: '2024-01-15'
  },
  {
    state: 'Gujarat',
    district: 'Ahmedabad',
    totalPopulation: 8059000,
    vaccinatedCount: 6929120,
    coveragePercentage: 86.0,
    vaccineType: 'COVID-19',
    lastUpdated: '2024-01-15'
  }
];

export const mockInfectionData: InfectionData[] = [
  {
    id: '1',
    state: 'Maharashtra',
    district: 'Mumbai',
    disease: 'COVID-19',
    confirmedCases: 1143245,
    recoveredCases: 1115623,
    deaths: 19749,
    activeCase: 7873,
    date: '2024-01-15'
  },
  {
    id: '2',
    state: 'Karnataka',
    district: 'Bangalore',
    disease: 'COVID-19',
    confirmedCases: 987654,
    recoveredCases: 965432,
    deaths: 15678,
    activeCase: 6544,
    date: '2024-01-15'
  },
  {
    id: '3',
    state: 'Delhi',
    district: 'Central Delhi',
    disease: 'COVID-19',
    confirmedCases: 678934,
    recoveredCases: 663245,
    deaths: 11234,
    activeCase: 4455,
    date: '2024-01-15'
  },
  {
    id: '4',
    state: 'Maharashtra',
    district: 'Mumbai',
    disease: 'Dengue',
    confirmedCases: 2341,
    recoveredCases: 2198,
    deaths: 15,
    activeCase: 128,
    date: '2024-01-15'
  },
  {
    id: '5',
    state: 'Karnataka',
    district: 'Bangalore',
    disease: 'Chikungunya',
    confirmedCases: 1876,
    recoveredCases: 1743,
    deaths: 3,
    activeCase: 130,
    date: '2024-01-15'
  }
];