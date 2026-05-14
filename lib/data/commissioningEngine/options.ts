export type SupplierType = "preferred supplier" | "Alkota fabricated" | "supplier inspired" | "consultation only";

export interface CommissioningOption {
  id: string;
  category: string;
  subCategory: string;
  name: string;
  brand?: string;
  supplierType?: SupplierType;
  description: string;
  price: number;
  payloadImpact: number; // in kg
  buildTimeImpact: number; // in days
  requiresConsultation: boolean;
  requiresRoadLegalityCheck: boolean;
  requiresPayloadReview: boolean;
  visualLayer?: string;
  scores?: {
    offGrid?: number;
    winter?: number;
    expedition?: number;
    luxury?: number;
    utility?: number;
  };
}

export const options: Record<string, CommissioningOption> = {
  // PLATFORMS
  'plat-man': {
    id: 'plat-man',
    category: 'Platform',
    subCategory: 'BASE VAN',
    name: 'MAN TGE / Volkswagen Crafter',
    brand: 'TGE 35',
    description: 'VW engineering, AWD available',
    price: 0,
    payloadImpact: 2100, // Base weight approximation
    buildTimeImpact: 0,
    requiresConsultation: false,
    requiresRoadLegalityCheck: false,
    requiresPayloadReview: false,
  },
  'plat-sprinter': {
    id: 'plat-sprinter',
    category: 'Platform',
    subCategory: 'BASE VAN',
    name: 'Mercedes-Benz Sprinter',
    brand: '319',
    description: 'Premium platform, strongest aftermarket support',
    price: 5000, // Premium surcharge
    payloadImpact: 2200,
    buildTimeImpact: 0,
    requiresConsultation: false,
    requiresRoadLegalityCheck: false,
    requiresPayloadReview: false,
  },
  // ... (Abbreviated for structure, will expand in implementation)
  
  // SUSPENSION
  'susp-rip': {
    id: 'susp-rip',
    category: 'Suspension',
    subCategory: 'UPGRADE',
    name: 'Ride Improvement Kit (RIP)',
    brand: 'Agile Offroad',
    description: 'Upgraded springs and Bilstein/Fox shocks.',
    price: 3500,
    payloadImpact: 25,
    buildTimeImpact: 2,
    requiresConsultation: false,
    requiresRoadLegalityCheck: false,
    requiresPayloadReview: true,
    visualLayer: 'suspension-rip',
    scores: { expedition: 1, luxury: 1 }
  },
  'susp-fox': {
    id: 'susp-fox',
    category: 'Suspension',
    subCategory: 'UPGRADE',
    name: 'Fox Factory Race Series',
    brand: 'Agile Offroad',
    description: 'Fox 2.5" internal bypass. Serious trail capability.',
    price: 10000,
    payloadImpact: 35,
    buildTimeImpact: 4,
    requiresConsultation: true,
    requiresRoadLegalityCheck: false,
    requiresPayloadReview: true,
    visualLayer: 'suspension-fox',
    scores: { expedition: 4, luxury: 2 }
  },

  // LIGHTING
  'lfog-tr750': {
    id: 'lfog-tr750',
    category: 'Lighting',
    subCategory: 'FOG / BUMPER',
    name: 'Lazer Triple-R 750',
    brand: 'Lazer Lamps',
    description: '8,200 lm combined · Grille integration.',
    price: 2100,
    payloadImpact: 3,
    buildTimeImpact: 1,
    requiresConsultation: false,
    requiresRoadLegalityCheck: false,
    requiresPayloadReview: false,
    visualLayer: 'lights-grille',
    scores: { expedition: 2, utility: 1 }
  }
};
