export interface HealthMetric {
  id: string;
  name: string;
  unit: string;
  normalRange: {
    min: number;
    max: number;
  };
  description: string;
  foodRecommendations: string[];
  lifestyleRecommendations: string[];
}

export interface HealthReading {
  metricId: string;
  value: number;
  timestamp: string;
}

export interface UserProfile {
  age?: number;
  gender?: 'male' | 'female' | 'other';
}
