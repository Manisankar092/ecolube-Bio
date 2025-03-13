interface LubricantProperties {
  type: string;
  application: string;
  viscosity?: string;
  temperature?: string;
}

interface CostAnalysis {
  initialCost: number;
  annualSavings: number;
  paybackPeriod: string;
  roi: string;
}

interface EnvironmentalImpact {
  carbonReduction: string;
  biodegradabilityRate: string;
  toxicityLevel: string;
  waterPollutionReduction: string;
}

interface Performance {
  wearProtection: string;
  oxidationStability: string;
  thermalStability: string;
  viscosityIndex: string;
}

interface Comparison {
  traditional: {
    type: string;
    properties: string[];
    limitations: string[];
  };
  bio: {
    type: string;
    properties: string[];
    advantages: string[];
  };
}

interface BioLubricantSuggestion {
  name: string;
  description: string;
  benefits: string[];
  sourceType: string;
  environmentalImpact: EnvironmentalImpact;
  costAnalysis: CostAnalysis;
  performance: Performance;
  comparison: Comparison;
  certifications: string[];
  applicationAreas: string[];
}

function calculateCostAnalysis(type: string): CostAnalysis {
  // Base costs in rupees (1 USD = ~83 INR)
  const baseCosts = {
    'industrial': { initial: 207500, savings: 66400 }, // ₹207,500 and ₹66,400
    'automotive': { initial: 124500, savings: 41500 }, // ₹124,500 and ₹41,500
    'marine': { initial: 249000, savings: 83000 },     // ₹249,000 and ₹83,000
    'general': { initial: 83000, savings: 24900 }      // ₹83,000 and ₹24,900
  };

  const costs = baseCosts[type as keyof typeof baseCosts] || baseCosts.general;
  const paybackMonths = Math.ceil(costs.initial / (costs.savings / 12));

  return {
    initialCost: costs.initial,
    annualSavings: costs.savings,
    paybackPeriod: `${paybackMonths} months`,
    roi: `${Math.round((costs.savings / costs.initial) * 100)}% annually`
  };
}

function calculateEnvironmentalImpact(type: string): EnvironmentalImpact {
  return {
    carbonReduction: '60-80% reduction in CO2 emissions',
    biodegradabilityRate: '>90% biodegradable within 28 days',
    toxicityLevel: 'Non-toxic to aquatic life',
    waterPollutionReduction: '95% reduction in water pollution risk'
  };
}

export function generateBioLubricantSuggestion(properties: LubricantProperties): BioLubricantSuggestion {
  const bioBasedAlternatives = {
    'industrial': ['Rapeseed oil', 'Soybean oil', 'Sunflower oil'],
    'automotive': ['Palm oil', 'Jatropha oil', 'Castor oil'],
    'marine': ['Coconut oil', 'Palm kernel oil', 'Algae-based oil'],
    'general': ['Canola oil', 'Corn oil', 'Olive oil']
  };

  const baseOil = bioBasedAlternatives[properties.type as keyof typeof bioBasedAlternatives]?.[0] 
    || bioBasedAlternatives.general[0];

  const suggestion: BioLubricantSuggestion = {
    name: `Bio-${properties.type.charAt(0).toUpperCase() + properties.type.slice(1)} Lubricant`,
    description: `Advanced ${properties.application} lubricant derived from ${baseOil}, specifically engineered for optimal performance and environmental sustainability.`,
    benefits: [
      'Biodegradable and eco-friendly composition',
      'Reduced environmental impact',
      'Enhanced lubricity and wear protection',
      'Improved thermal stability',
      'Lower volatility and higher flash point',
      'Reduced toxicity and safer handling'
    ],
    sourceType: `Plant-based (${baseOil})`,
    environmentalImpact: calculateEnvironmentalImpact(properties.type),
    costAnalysis: calculateCostAnalysis(properties.type),
    performance: {
      wearProtection: 'Excellent',
      oxidationStability: 'Very Good',
      thermalStability: 'Superior',
      viscosityIndex: '160-200'
    },
    comparison: {
      traditional: {
        type: 'Mineral-based lubricant',
        properties: [
          'Derived from petroleum',
          'Limited biodegradability',
          'Higher environmental impact',
          'Standard performance metrics'
        ],
        limitations: [
          'Environmental persistence',
          'Higher toxicity',
          'Limited renewable content',
          'Regulatory constraints'
        ]
      },
      bio: {
        type: `${baseOil}-based lubricant`,
        properties: [
          'Derived from renewable resources',
          'Highly biodegradable',
          'Minimal environmental impact',
          'Enhanced performance characteristics'
        ],
        advantages: [
          'Sustainable sourcing',
          'Reduced carbon footprint',
          'Better workplace safety',
          'Future-proof compliance'
        ]
      }
    },
    certifications: [
      'ISO 15380 HEES',
      'EU Ecolabel',
      'USDA BioPreferred',
      'Blue Angel Environmental Label'
    ],
    applicationAreas: [
      'Industrial machinery',
      'Hydraulic systems',
      'Gear boxes',
      'Bearings',
      'Chain drives'
    ]
  };

  if (properties.viscosity) {
    suggestion.description += ` Formulated to meet ${properties.viscosity} viscosity requirements.`;
  }

  if (properties.temperature) {
    suggestion.description += ` Optimized for ${properties.temperature} operating conditions.`;
  }

  return suggestion;
}