import { foodPreparations } from '../data/foodPreparations';
import { healthMetrics } from '../data/healthMetrics';

describe('Food Preparations Data', () => {
  // Test that all metrics have food preparations
  test('all metrics with recommended foods have food preparations', () => {
    healthMetrics.forEach(metric => {
      if (metric.foodRecommendations && metric.foodRecommendations.length > 0) {
        expect(foodPreparations).toHaveProperty(metric.id);
        
        metric.foodRecommendations.forEach((food: string) => {
          const preparations = foodPreparations[metric.id];
          expect(preparations).toHaveProperty(food);
          expect(preparations[food].preparation).toBeTruthy();
          expect(preparations[food].recipeUrl).toBeTruthy();
          
          // Log food items and their preparations for debugging
          console.log(`Testing ${metric.id} - ${food}:`, preparations[food]);
        });
      }
    });
  });

  // Test data structure
  test('food preparations have correct structure', () => {
    Object.entries(foodPreparations).forEach(([metricId, foods]) => {
      Object.entries(foods).forEach(([foodName, data]) => {
        expect(data).toHaveProperty('preparation');
        expect(data).toHaveProperty('recipeUrl');
        expect(typeof data.preparation).toBe('string');
        expect(typeof data.recipeUrl).toBe('string');
        expect(data.preparation.length).toBeGreaterThan(0);
        expect(data.recipeUrl?.length).toBeGreaterThan(0);
      });
    });
  });

  // Test specific cases
  test('nuts preparation data exists for all metrics that recommend nuts', () => {
    healthMetrics.forEach(metric => {
      if (metric.foodRecommendations?.includes('Nuts')) {
        const preparations = foodPreparations[metric.id];
        expect(preparations).toHaveProperty('Nuts');
        const nutsData = preparations['Nuts'];
        expect(nutsData.preparation).toBeTruthy();
        expect(nutsData.recipeUrl).toBeTruthy();
        
        // Log nuts data for debugging
        console.log(`Nuts data for ${metric.id}:`, nutsData);
      }
    });
  });
});
