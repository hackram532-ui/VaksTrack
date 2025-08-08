import { Vaccine } from '../types';

export const vaccines: Vaccine[] = [
  {
    id: 'bcg',
    name: 'BCG',
    description: 'Bacillus Calmette-Guérin vaccine for tuberculosis',
    manufacturer: 'Serum Institute of India',
    type: 'routine',
    ageGroups: ['0-1 years'],
    doses: 1,
    interval: 0,
    sideEffects: ['Mild fever', 'Local swelling', 'Small scar formation'],
    contraindications: ['Immunocompromised patients', 'Active TB']
  },
  {
    id: 'hepatitis-b',
    name: 'Hepatitis B',
    description: 'Hepatitis B vaccine for liver protection',
    manufacturer: 'Bharat Biotech',
    type: 'routine',
    ageGroups: ['0-1 years', '1-5 years'],
    doses: 3,
    interval: 30,
    sideEffects: ['Soreness at injection site', 'Mild fever'],
    contraindications: ['Severe illness', 'Allergy to yeast']
  },
  {
    id: 'dpt',
    name: 'DPT',
    description: 'Diphtheria, Pertussis, and Tetanus vaccine',
    manufacturer: 'Serum Institute of India',
    type: 'routine',
    ageGroups: ['6 weeks - 2 years'],
    doses: 3,
    interval: 28,
    sideEffects: ['Fever', 'Irritability', 'Swelling at injection site'],
    contraindications: ['Previous severe reaction', 'Progressive neurological disorder']
  },
  {
    id: 'polio',
    name: 'Polio (OPV/IPV)',
    description: 'Oral/Injectable Polio Vaccine',
    manufacturer: 'Bio-Med',
    type: 'routine',
    ageGroups: ['6 weeks - 5 years'],
    doses: 4,
    interval: 28,
    sideEffects: ['Mild fever', 'Irritability'],
    contraindications: ['Immunodeficiency', 'Severe illness']
  },
  {
    id: 'mmr',
    name: 'MMR',
    description: 'Measles, Mumps, and Rubella vaccine',
    manufacturer: 'Serum Institute of India',
    type: 'routine',
    ageGroups: ['9-15 months', '4-6 years'],
    doses: 2,
    interval: 28,
    sideEffects: ['Fever', 'Rash', 'Joint pain'],
    contraindications: ['Pregnancy', 'Immunocompromised', 'Severe illness']
  },
  {
    id: 'covishield',
    name: 'Covishield',
    description: 'COVID-19 vaccine (AstraZeneca)',
    manufacturer: 'Serum Institute of India',
    type: 'covid',
    ageGroups: ['18+ years'],
    doses: 2,
    interval: 84,
    sideEffects: ['Fever', 'Headache', 'Fatigue', 'Muscle pain'],
    contraindications: ['Previous severe allergic reaction', 'Severe illness']
  },
  {
    id: 'covaxin',
    name: 'Covaxin',
    description: 'COVID-19 vaccine (Inactivated)',
    manufacturer: 'Bharat Biotech',
    type: 'covid',
    ageGroups: ['18+ years'],
    doses: 2,
    interval: 28,
    sideEffects: ['Pain at injection site', 'Headache', 'Fever'],
    contraindications: ['Allergy to vaccine components', 'Acute illness']
  },
  {
    id: 'influenza',
    name: 'Influenza',
    description: 'Seasonal flu vaccine',
    manufacturer: 'Various',
    type: 'seasonal',
    ageGroups: ['6 months+'],
    doses: 1,
    interval: 365,
    sideEffects: ['Soreness at injection site', 'Low fever'],
    contraindications: ['Severe egg allergy', 'Previous severe reaction']
  }
];