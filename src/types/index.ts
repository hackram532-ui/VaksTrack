export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: string;
  state: string;
  district: string;
  pincode: string;
  emergencyContact: string;
  createdAt: string;
}

export interface Individual {
  id: string;
  userId: string;
  name: string;
  relationship: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  aadharNumber?: string;
  createdAt: string;
}

export interface Vaccine {
  id: string;
  name: string;
  description: string;
  manufacturer: string;
  type: 'routine' | 'covid' | 'seasonal';
  ageGroups: string[];
  doses: number;
  interval: number; // days between doses
  sideEffects: string[];
  contraindications: string[];
}

export interface VaccinationRecord {
  id: string;
  individualId: string;
  vaccineId: string;
  vaccineName: string;
  doseNumber: number;
  dateAdministered: string;
  location: string;
  batchNumber: string;
  administrator: string;
  nextDueDate?: string;
  sideEffects?: string;
  notes?: string;
}

export interface CoverageStats {
  state: string;
  district: string;
  totalPopulation: number;
  vaccinatedCount: number;
  coveragePercentage: number;
  vaccineType: string;
  lastUpdated: string;
}

export interface InfectionData {
  id: string;
  state: string;
  district: string;
  disease: string;
  confirmedCases: number;
  recoveredCases: number;
  deaths: number;
  activeCase: number;
  date: string;
}