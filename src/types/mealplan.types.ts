export interface Meal {
  name: string;
  description: string;
  ingredients: string[];
  preparation: string;
  nutritionalBenefits: string;
  imageUrl?: string;
}

export interface DailyMealPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snacks: Meal[];
}

export interface WeeklyMealPlan {
  metricId: string;
  targetValue: number;
  currentValue: number;
  days: DailyMealPlan[];
}
