import { WeeklyMealPlan } from '../types/mealplan.types';

// Sample meal plans for different health metrics
export const generateMealPlan = (metricId: string, currentValue: number, targetValue: number): WeeklyMealPlan => {
  // Base meal plan structure
  const baseMealPlan: WeeklyMealPlan = {
    metricId,
    currentValue,
    targetValue,
    days: Array(7).fill(null).map(() => ({
      breakfast: {
        name: '',
        description: '',
        ingredients: [],
        preparation: '',
        nutritionalBenefits: '',
      },
      lunch: {
        name: '',
        description: '',
        ingredients: [],
        preparation: '',
        nutritionalBenefits: '',
      },
      dinner: {
        name: '',
        description: '',
        ingredients: [],
        preparation: '',
        nutritionalBenefits: '',
      },
      snacks: [],
    })),
  };

  // Customize meal plan based on the health metric
  switch (metricId) {
    case 'total-cholesterol':
      return generateCholesterolMealPlan(baseMealPlan, currentValue > targetValue);
    case 'hdl':
      return generateHDLMealPlan(baseMealPlan, currentValue < targetValue);
    case 'ldl':
      return generateLDLMealPlan(baseMealPlan, currentValue > targetValue);
    case 'triglycerides':
      return generateTriglyceridesMealPlan(baseMealPlan, currentValue > targetValue);
    case 'blood-glucose':
      return generateBloodGlucoseMealPlan(baseMealPlan, currentValue > targetValue);
    case 'blood-pressure':
      return generateBloodPressureMealPlan(baseMealPlan, currentValue > targetValue);
    default:
      return generateDefaultMealPlan(baseMealPlan);
  }
};

// Helper function to generate a meal plan for high cholesterol
const generateCholesterolMealPlan = (baseMealPlan: WeeklyMealPlan, needsReduction: boolean): WeeklyMealPlan => {
  const mealPlan = { ...baseMealPlan };
  
  // Day 1
  mealPlan.days[0] = {
    breakfast: {
      name: 'Oatmeal with Berries and Nuts',
      description: 'Heart-healthy oatmeal topped with antioxidant-rich berries and omega-3 packed nuts',
      ingredients: ['1/2 cup steel-cut oats', '1 cup almond milk', '1/4 cup mixed berries', '1 tbsp chopped walnuts', '1 tsp honey'],
      preparation: 'Cook oats with almond milk according to package instructions. Top with berries, walnuts, and a drizzle of honey.',
      nutritionalBenefits: 'Oats contain beta-glucan, a soluble fiber that helps lower LDL cholesterol. Berries provide antioxidants, and walnuts offer omega-3 fatty acids.',
    },
    lunch: {
      name: 'Mediterranean Quinoa Bowl',
      description: 'Protein-rich quinoa with vegetables and olive oil',
      ingredients: ['1/2 cup quinoa', '1 cup mixed vegetables (bell peppers, cucumbers, tomatoes)', '1/4 cup chickpeas', '1 tbsp olive oil', '1 tsp lemon juice', 'Fresh herbs'],
      preparation: 'Cook quinoa according to package instructions. Mix with chopped vegetables, chickpeas, olive oil, lemon juice, and herbs.',
      nutritionalBenefits: 'Plant-based proteins from quinoa and chickpeas help manage cholesterol. Olive oil contains monounsaturated fats that help reduce LDL cholesterol.',
    },
    dinner: {
      name: 'Baked Salmon with Steamed Vegetables',
      description: 'Omega-3 rich salmon with fiber-packed vegetables',
      ingredients: ['4 oz salmon fillet', '1 cup broccoli', '1 cup carrots', '1 tbsp olive oil', 'Lemon', 'Herbs and spices'],
      preparation: 'Bake salmon at 375°F for 15-20 minutes. Steam vegetables and season with olive oil, lemon, and herbs.',
      nutritionalBenefits: 'Salmon is rich in omega-3 fatty acids that help reduce inflammation and lower triglycerides. Vegetables provide fiber that helps lower cholesterol.',
    },
    snacks: [
      {
        name: 'Apple with Almond Butter',
        description: 'Fiber-rich apple with heart-healthy almond butter',
        ingredients: ['1 medium apple', '1 tbsp almond butter'],
        preparation: 'Slice apple and serve with almond butter for dipping.',
        nutritionalBenefits: 'Apples contain pectin, a type of soluble fiber that helps lower cholesterol. Almond butter provides healthy monounsaturated fats.',
      }
    ],
  };

  // Day 2
  mealPlan.days[1] = {
    breakfast: {
      name: 'Greek Yogurt Parfait',
      description: 'Protein-rich yogurt with cholesterol-lowering ingredients',
      ingredients: ['1 cup Greek yogurt (low-fat)', '1/4 cup granola (low-sugar)', '1/2 cup mixed berries', '1 tsp honey', '1 tbsp ground flaxseeds'],
      preparation: 'Layer yogurt, granola, berries, and flaxseeds in a bowl. Drizzle with honey.',
      nutritionalBenefits: 'Greek yogurt provides probiotics that may help lower cholesterol. Flaxseeds contain alpha-linolenic acid (ALA), an omega-3 fatty acid that benefits heart health.',
    },
    lunch: {
      name: 'Lentil Soup with Whole Grain Bread',
      description: 'Fiber-rich lentils with whole grains',
      ingredients: ['1 cup lentil soup', '1 slice whole grain bread', '1 tsp olive oil'],
      preparation: 'Heat lentil soup and serve with whole grain bread drizzled with olive oil.',
      nutritionalBenefits: 'Lentils are high in soluble fiber and plant protein, which help lower cholesterol. Whole grains contain beta-glucans that reduce cholesterol absorption.',
    },
    dinner: {
      name: 'Stir-Fried Tofu with Vegetables',
      description: 'Plant-based protein with colorful vegetables',
      ingredients: ['4 oz firm tofu', '2 cups mixed vegetables (broccoli, bell peppers, carrots, snow peas)', '1 tbsp olive oil', '1 clove garlic', 'Ginger', 'Low-sodium soy sauce'],
      preparation: 'Stir-fry tofu and vegetables with garlic, ginger, and a small amount of low-sodium soy sauce.',
      nutritionalBenefits: 'Tofu contains isoflavones that may help lower LDL cholesterol. Vegetables provide antioxidants and fiber that support heart health.',
    },
    snacks: [
      {
        name: 'Handful of Almonds',
        description: 'Heart-healthy nuts rich in monounsaturated fats',
        ingredients: ['1/4 cup almonds (unsalted)'],
        preparation: 'Portion out almonds for a quick snack.',
        nutritionalBenefits: 'Almonds are rich in monounsaturated fats, vitamin E, and magnesium, all of which support heart health and help lower cholesterol.',
      }
    ],
  };

  // Fill remaining days with similar patterns (simplified for brevity)
  for (let i = 2; i < 7; i++) {
    mealPlan.days[i] = i % 2 === 0 ? { ...mealPlan.days[0] } : { ...mealPlan.days[1] };
  }

  return mealPlan;
};

// Helper function to generate a meal plan for low HDL cholesterol
const generateHDLMealPlan = (baseMealPlan: WeeklyMealPlan, needsIncrease: boolean): WeeklyMealPlan => {
  const mealPlan = { ...baseMealPlan };
  
  // Day 1
  mealPlan.days[0] = {
    breakfast: {
      name: 'Avocado Toast with Eggs',
      description: 'Healthy fats from avocado with protein-rich eggs',
      ingredients: ['1 slice whole grain bread', '1/2 avocado', '1 egg (poached or boiled)', 'Red pepper flakes', 'Salt and pepper to taste'],
      preparation: 'Toast bread, spread mashed avocado, and top with egg. Season with red pepper flakes, salt, and pepper.',
      nutritionalBenefits: 'Avocados contain monounsaturated fats that can help increase HDL cholesterol. Eggs provide high-quality protein and nutrients.',
    },
    lunch: {
      name: 'Olive Oil and Lemon Dressed Salad with Fatty Fish',
      description: 'Omega-3 rich fish with olive oil dressing',
      ingredients: ['3 oz grilled mackerel or salmon', '2 cups mixed greens', '1/4 cup cherry tomatoes', '1/4 cucumber', '1 tbsp olive oil', '1 tsp lemon juice', 'Herbs'],
      preparation: 'Grill fish and serve over mixed greens with vegetables. Dress with olive oil, lemon juice, and herbs.',
      nutritionalBenefits: 'Fatty fish provides omega-3 fatty acids that can increase HDL levels. Olive oil contains polyphenols that help raise HDL cholesterol.',
    },
    dinner: {
      name: 'Grilled Chicken with Sweet Potato and Broccoli',
      description: 'Lean protein with complex carbohydrates and fiber',
      ingredients: ['4 oz chicken breast', '1 medium sweet potato', '1 cup broccoli', '1 tbsp olive oil', 'Herbs and spices'],
      preparation: 'Grill chicken and season with herbs. Bake sweet potato and steam broccoli. Drizzle vegetables with olive oil.',
      nutritionalBenefits: 'Lean protein from chicken supports overall health. Sweet potatoes provide fiber and antioxidants. Olive oil helps increase HDL levels.',
    },
    snacks: [
      {
        name: 'Trail Mix with Nuts and Dark Chocolate',
        description: 'Heart-healthy nuts with antioxidant-rich dark chocolate',
        ingredients: ['1/4 cup mixed nuts (almonds, walnuts, pistachios)', '1 tbsp dark chocolate chips', '1 tbsp dried cranberries'],
        preparation: 'Mix all ingredients for a quick snack.',
        nutritionalBenefits: 'Nuts contain healthy fats that can raise HDL levels. Dark chocolate contains flavonoids that support heart health.',
      }
    ],
  };

  // Fill remaining days (simplified for brevity)
  for (let i = 1; i < 7; i++) {
    mealPlan.days[i] = { ...mealPlan.days[0] };
  }

  return mealPlan;
};

// Helper function to generate a meal plan for high LDL cholesterol
const generateLDLMealPlan = (baseMealPlan: WeeklyMealPlan, needsReduction: boolean): WeeklyMealPlan => {
  // Similar implementation to cholesterol meal plan
  return generateCholesterolMealPlan(baseMealPlan, needsReduction);
};

// Helper function to generate a meal plan for high triglycerides
const generateTriglyceridesMealPlan = (baseMealPlan: WeeklyMealPlan, needsReduction: boolean): WeeklyMealPlan => {
  const mealPlan = { ...baseMealPlan };
  
  // Day 1
  mealPlan.days[0] = {
    breakfast: {
      name: 'Chia Seed Pudding with Berries',
      description: 'Omega-3 rich chia seeds with antioxidant-packed berries',
      ingredients: ['2 tbsp chia seeds', '1 cup almond milk', '1/2 cup mixed berries', '1 tsp honey', '1/4 tsp vanilla extract'],
      preparation: 'Mix chia seeds, almond milk, and vanilla. Refrigerate overnight. Top with berries and honey before serving.',
      nutritionalBenefits: 'Chia seeds are rich in omega-3 fatty acids that help lower triglycerides. Berries provide antioxidants and fiber.',
    },
    lunch: {
      name: 'Grilled Fish Tacos with Avocado',
      description: 'Omega-3 rich fish with healthy fats',
      ingredients: ['4 oz white fish (cod or tilapia)', '2 small corn tortillas', '1/4 avocado', '1/2 cup shredded cabbage', 'Lime juice', 'Cilantro'],
      preparation: 'Grill fish and flake into pieces. Warm tortillas and fill with fish, avocado, cabbage, lime juice, and cilantro.',
      nutritionalBenefits: 'Fish provides lean protein and omega-3 fatty acids. Avocado contains monounsaturated fats that help lower triglycerides.',
    },
    dinner: {
      name: 'Turkey and Vegetable Stir-Fry',
      description: 'Lean protein with fiber-rich vegetables',
      ingredients: ['4 oz ground turkey', '2 cups mixed vegetables (bell peppers, broccoli, snap peas)', '1 tbsp olive oil', 'Garlic', 'Ginger', 'Low-sodium soy sauce'],
      preparation: 'Stir-fry turkey with vegetables, garlic, ginger, and a small amount of low-sodium soy sauce.',
      nutritionalBenefits: 'Lean turkey provides protein without excess saturated fat. Vegetables offer fiber that helps lower triglycerides.',
    },
    snacks: [
      {
        name: 'Greek Yogurt with Walnuts',
        description: 'Protein-rich yogurt with omega-3 packed nuts',
        ingredients: ['3/4 cup Greek yogurt (low-fat)', '1 tbsp chopped walnuts', '1 tsp honey'],
        preparation: 'Top yogurt with walnuts and a drizzle of honey.',
        nutritionalBenefits: 'Greek yogurt provides protein and probiotics. Walnuts contain omega-3 fatty acids that help lower triglycerides.',
      }
    ],
  };

  // Fill remaining days (simplified for brevity)
  for (let i = 1; i < 7; i++) {
    mealPlan.days[i] = { ...mealPlan.days[0] };
  }

  return mealPlan;
};

// Helper function to generate a meal plan for high blood glucose
const generateBloodGlucoseMealPlan = (baseMealPlan: WeeklyMealPlan, needsReduction: boolean): WeeklyMealPlan => {
  const mealPlan = { ...baseMealPlan };
  
  // Day 1
  mealPlan.days[0] = {
    breakfast: {
      name: 'Vegetable Omelet with Whole Grain Toast',
      description: 'Protein-rich eggs with fiber from vegetables and whole grains',
      ingredients: ['2 eggs', '1/2 cup mixed vegetables (spinach, bell peppers, onions)', '1 slice whole grain bread', '1 tsp olive oil'],
      preparation: 'Sauté vegetables in olive oil, add beaten eggs to make an omelet. Serve with whole grain toast.',
      nutritionalBenefits: 'Eggs provide protein that doesn\'t raise blood sugar. Vegetables and whole grains offer fiber that slows glucose absorption.',
    },
    lunch: {
      name: 'Quinoa and Chickpea Salad',
      description: 'Complex carbohydrates with plant-based protein',
      ingredients: ['1/2 cup cooked quinoa', '1/4 cup chickpeas', '1 cup mixed greens', '1/4 cup cucumber', '1/4 cup cherry tomatoes', '1 tbsp olive oil', '1 tsp lemon juice'],
      preparation: 'Mix all ingredients and dress with olive oil and lemon juice.',
      nutritionalBenefits: 'Quinoa and chickpeas have a low glycemic index, providing steady energy without blood sugar spikes. Vegetables add fiber and nutrients.',
    },
    dinner: {
      name: 'Grilled Chicken with Roasted Vegetables',
      description: 'Lean protein with non-starchy vegetables',
      ingredients: ['4 oz chicken breast', '2 cups non-starchy vegetables (broccoli, cauliflower, zucchini)', '1 tbsp olive oil', 'Herbs and spices'],
      preparation: 'Grill chicken and roast vegetables with olive oil and herbs.',
      nutritionalBenefits: 'Lean protein from chicken helps maintain stable blood sugar. Non-starchy vegetables are low in carbohydrates and high in fiber.',
    },
    snacks: [
      {
        name: 'Celery with Almond Butter',
        description: 'Low-carb vegetable with healthy fat',
        ingredients: ['2 celery stalks', '1 tbsp almond butter'],
        preparation: 'Spread almond butter on celery stalks.',
        nutritionalBenefits: 'Celery is very low in carbohydrates. Almond butter provides healthy fats that don\'t raise blood sugar and help you feel full longer.',
      }
    ],
  };

  // Fill remaining days (simplified for brevity)
  for (let i = 1; i < 7; i++) {
    mealPlan.days[i] = { ...mealPlan.days[0] };
  }

  return mealPlan;
};

// Helper function to generate a meal plan for high blood pressure
const generateBloodPressureMealPlan = (baseMealPlan: WeeklyMealPlan, needsReduction: boolean): WeeklyMealPlan => {
  const mealPlan = { ...baseMealPlan };
  
  // Day 1
  mealPlan.days[0] = {
    breakfast: {
      name: 'DASH Diet Smoothie Bowl',
      description: 'Potassium-rich fruits with low-fat dairy',
      ingredients: ['1 banana', '1/2 cup berries', '1/2 cup low-fat Greek yogurt', '1/4 cup almond milk', '1 tbsp ground flaxseeds', '1 tbsp unsalted nuts'],
      preparation: 'Blend banana, berries, yogurt, and almond milk. Top with flaxseeds and nuts.',
      nutritionalBenefits: 'Bananas and berries are high in potassium, which helps lower blood pressure. Flaxseeds provide omega-3 fatty acids that support heart health.',
    },
    lunch: {
      name: 'Spinach and Lentil Soup',
      description: 'Magnesium-rich spinach with fiber-packed lentils',
      ingredients: ['1 cup lentil soup', '1 cup fresh spinach', '1 clove garlic', '1 tsp olive oil', 'Herbs and spices (no salt)'],
      preparation: 'Heat lentil soup and add fresh spinach, garlic, olive oil, and herbs.',
      nutritionalBenefits: 'Spinach is high in magnesium and potassium, which help regulate blood pressure. Lentils provide plant-based protein and fiber.',
    },
    dinner: {
      name: 'Baked Fish with Sweet Potato and Asparagus',
      description: 'Lean protein with potassium-rich vegetables',
      ingredients: ['4 oz white fish (cod or tilapia)', '1 medium sweet potato', '1 cup asparagus', '1 tbsp olive oil', 'Lemon', 'Herbs (no salt)'],
      preparation: 'Bake fish with lemon and herbs. Roast sweet potato and asparagus with olive oil.',
      nutritionalBenefits: 'Fish provides lean protein and omega-3 fatty acids. Sweet potatoes and asparagus are rich in potassium, which helps lower blood pressure.',
    },
    snacks: [
      {
        name: 'Unsalted Mixed Nuts',
        description: 'Heart-healthy fats without added sodium',
        ingredients: ['1/4 cup unsalted mixed nuts'],
        preparation: 'Portion out nuts for a quick snack.',
        nutritionalBenefits: 'Nuts contain healthy fats, fiber, and magnesium, which help lower blood pressure. Choosing unsalted varieties keeps sodium intake low.',
      }
    ],
  };

  // Fill remaining days (simplified for brevity)
  for (let i = 1; i < 7; i++) {
    mealPlan.days[i] = { ...mealPlan.days[0] };
  }

  return mealPlan;
};

// Default meal plan for other metrics
const generateDefaultMealPlan = (baseMealPlan: WeeklyMealPlan): WeeklyMealPlan => {
  const mealPlan = { ...baseMealPlan };
  
  // Day 1
  mealPlan.days[0] = {
    breakfast: {
      name: 'Balanced Breakfast Bowl',
      description: 'Nutrient-dense breakfast with whole foods',
      ingredients: ['1/2 cup oats', '1 cup almond milk', '1 tbsp chia seeds', '1/2 banana', '1/4 cup berries', '1 tbsp nut butter'],
      preparation: 'Cook oats with almond milk, stir in chia seeds, and top with banana, berries, and nut butter.',
      nutritionalBenefits: 'Provides a balance of complex carbohydrates, healthy fats, and protein for sustained energy and overall health.',
    },
    lunch: {
      name: 'Mediterranean Bowl',
      description: 'Plant-based meal with healthy fats',
      ingredients: ['1/2 cup quinoa', '1/4 cup chickpeas', '1 cup mixed vegetables', '1/4 avocado', '1 tbsp olive oil', 'Lemon juice', 'Herbs'],
      preparation: 'Combine cooked quinoa with chickpeas, vegetables, and avocado. Dress with olive oil, lemon juice, and herbs.',
      nutritionalBenefits: 'Mediterranean diet pattern is associated with numerous health benefits, including heart health, reduced inflammation, and longevity.',
    },
    dinner: {
      name: 'Balanced Protein Plate',
      description: 'Lean protein with complex carbohydrates and vegetables',
      ingredients: ['4 oz lean protein (chicken, fish, or tofu)', '1/2 cup whole grains', '2 cups non-starchy vegetables', '1 tbsp healthy oil', 'Herbs and spices'],
      preparation: 'Cook protein and serve with whole grains and vegetables seasoned with healthy oil and herbs.',
      nutritionalBenefits: 'Balanced macronutrients support overall health, muscle maintenance, and proper nutrient absorption.',
    },
    snacks: [
      {
        name: 'Fruit and Nut Mix',
        description: 'Natural sugars with healthy fats',
        ingredients: ['1 piece fresh fruit', '1 tbsp nuts or seeds'],
        preparation: 'Pair fruit with a small portion of nuts or seeds.',
        nutritionalBenefits: 'Provides a balance of carbohydrates and fats for sustained energy, along with vitamins, minerals, and antioxidants.',
      }
    ],
  };

  // Fill remaining days (simplified for brevity)
  for (let i = 1; i < 7; i++) {
    mealPlan.days[i] = { ...mealPlan.days[0] };
  }

  return mealPlan;
};
