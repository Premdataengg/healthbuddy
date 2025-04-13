export interface FoodPreparation {
  preparation: string;
  recipeUrl?: string;
}

export interface FoodPreparations {
  [metricId: string]: {
    [foodName: string]: FoodPreparation;
  };
}
