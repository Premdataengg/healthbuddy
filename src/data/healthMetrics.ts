import { HealthMetric } from '../types/health.types';

export const healthMetrics: HealthMetric[] = [
  {
    id: 'total-cholesterol',
    name: 'Total Cholesterol',
    unit: 'mg/dL',
    normalRange: { min: 125, max: 200 },
    description: 'Total cholesterol measures both LDL (bad) and HDL (good) cholesterol in your blood',
    foodRecommendations: [
      'Oats',
      'Beans',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Fatty fish (salmon)',
      'Fatty fish (mackerel)',
      'Avocados',
      'Olive oil',
      'Apples',
      'Broccoli',
      'Soy products (tofu)',
      'Soy products (tempeh)'
    ],
    lifestyleRecommendations: [
      'Aerobic exercise (brisk walking, 150 minutes/week)',
      'Yoga/Tai Chi for stress reduction',
      'Daily meditation practice',
      'Maintain healthy weight',
      'Quit smoking',
      'Limit alcohol consumption',
    ],
  },
  {
    id: 'hdl',
    name: 'HDL Cholesterol',
    unit: 'mg/dL',
    normalRange: { min: 40, max: 60 },
    description: 'High-density lipoprotein (HDL) is known as "good" cholesterol',
    foodRecommendations: [
      'Fatty fish (salmon)',
      'Fatty fish (mackerel)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Olive oil',
      'Avocados',
      'Whole grains (oats)',
      'Whole grains (barley)',
      'Legumes (beans)',
      'Legumes (lentils)',
      'Purple produce (eggplant)',
      'Purple produce (grapes)',
      'Berries',
      'Red wine (in moderation, consult doctor)',
    ],
    lifestyleRecommendations: [
      'Regular aerobic exercise (cycling)',
      'Strength training twice weekly',
      'Yoga for flexibility',
      'Meditation for stress management',
      'Maintain healthy weight',
      'Regular sleep schedule',
    ],
  },
  {
    id: 'ldl',
    name: 'LDL Cholesterol',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 100 },
    description: 'Low-density lipoprotein (LDL) is known as "bad" cholesterol',
    foodRecommendations: [
      'Oats',
      'Beans',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Fatty fish (salmon)',
      'Fatty fish (mackerel)',
      'Avocados',
      'Olive oil',
      'Apples',
      'Broccoli',
      'Soy products (tofu)',
      'Soy products (tempeh)'
    ],
    lifestyleRecommendations: [
      'Aerobic exercise (brisk walking, 150 minutes/week)',
      'Yoga/Tai Chi for stress reduction',
      'Daily meditation practice',
      'Maintain healthy weight',
      'Quit smoking',
      'Limit alcohol consumption',
    ],
  },
  {
    id: 'triglycerides',
    name: 'Triglycerides',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 150 },
    description: 'Type of fat found in blood that your body uses for energy',
    foodRecommendations: [
      'Fatty fish (mackerel)',
      'Fatty fish (sardines)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Olive oil',
      'Avocados',
      'Beans and legumes',
      'Whole grains (oats)',
      'Whole grains (brown rice)',
      'Low-fat dairy (Greek yogurt)',
      'Berries',
      'Leafy greens (spinach)',
      'Leafy greens (kale)',
      'Lean proteins (chicken)',
      'Lean proteins (turkey)',
    ],
    lifestyleRecommendations: [
      'Aerobic exercise (swimming, 150 minutes/week)',
      'Yoga or Tai Chi for stress reduction',
      'Daily meditation practice',
      'Weight management',
      'Limit alcohol consumption',
      'Get adequate sleep (7-9 hours)',
    ],
  },
  {
    id: 'blood-glucose',
    name: 'Blood Glucose (Fasting)',
    unit: 'mg/dL',
    normalRange: { min: 70, max: 100 },
    description: 'Blood sugar level when you haven\'t eaten for at least 8 hours',
    foodRecommendations: [
      'Non-starchy vegetables (broccoli)',
      'Non-starchy vegetables (cauliflower)',
      'Beans and legumes (lentils)',
      'Beans and legumes (chickpeas)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Whole grains (quinoa)',
      'Whole grains (oats)',
      'Fatty fish (salmon)',
      'Fatty fish (mackerel)',
      'Eggs',
      'Avocados',
      'Berries (blueberries)',
      'Apples (with skin)',
      'Greek yogurt (plain)',
    ],
    lifestyleRecommendations: [
      'Aerobic exercise (cycling, 150 minutes/week)',
      'Strength training for insulin sensitivity',
      'Yoga or Tai Chi for stress management',
      'Meditation to reduce stress-related glucose spikes',
      'Adequate sleep (7-9 hours/night)',
      'Regular meal timing',
    ],
  },
  {
    id: 'hemoglobin',
    name: 'Hemoglobin',
    unit: 'g/dL',
    normalRange: { min: 13.5, max: 17.5 },
    description: 'Protein in red blood cells that carries oxygen throughout your body',
    foodRecommendations: [
      'Lean red meat (beef)',
      'Lean red meat (lamb)',
      'Poultry (chicken)',
      'Poultry (turkey)',
      'Fish (tuna)',
      'Fish (salmon)',
      'Shellfish (clams)',
      'Shellfish (oysters)',
      'Legumes (lentils)',
      'Legumes (chickpeas)',
      'Dark leafy greens (spinach)',
      'Dark leafy greens (kale)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Pumpkin seeds',
      'Fortified cereals',
      'Tofu',
      'Eggs',
    ],
    lifestyleRecommendations: [
      'Moderate exercise (walking)',
      'Yoga for overall well-being',
      'Meditation for stress management',
      'Avoid excessive alcohol/caffeine',
      'Ensure adequate hydration',
      'Regular health check-ups',
    ],
  },
  {
    id: 'hematocrit',
    name: 'Hematocrit',
    unit: '%',
    normalRange: { min: 38.3, max: 48.6 },
    description: 'Percentage of red blood cells in your blood',
    foodRecommendations: [
      'Lean red meat (beef)',
      'Lean red meat (lamb)',
      'Poultry (chicken)',
      'Poultry (turkey)',
      'Fish (tuna)',
      'Fish (salmon)',
      'Shellfish (clams)',
      'Shellfish (oysters)',
      'Legumes (lentils)',
      'Legumes (chickpeas)',
      'Dark leafy greens (spinach)',
      'Dark leafy greens (kale)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Pumpkin seeds',
      'Fortified cereals',
      'Tofu',
      'Eggs',
    ],
    lifestyleRecommendations: [
      'Moderate exercise (walking)',
      'Yoga for overall well-being',
      'Meditation for stress management',
      'Avoid excessive alcohol/caffeine',
      'Ensure adequate hydration',
      'Regular health check-ups',
    ],
  },
  {
    id: 'blood-pressure-systolic',
    name: 'Blood Pressure (Systolic)',
    unit: 'mmHg',
    normalRange: { min: 90, max: 120 },
    description: 'The pressure in your arteries when your heart beats',
    foodRecommendations: [
      'Bananas',
      'Beets',
      'Leafy greens',
      'Berries',
      'Salmon',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Whole grains',
    ],
    lifestyleRecommendations: [
      'Regular aerobic exercise (brisk walking)',
      'Strength training twice weekly',
      'Yoga for flexibility',
      'Meditation for stress management',
      'Maintain healthy weight',
      'Regular sleep schedule',
    ],
  },
  {
    id: 'blood-pressure-diastolic',
    name: 'Blood Pressure (Diastolic)',
    unit: 'mmHg',
    normalRange: { min: 60, max: 80 },
    description: 'The pressure in your arteries between heartbeats',
    foodRecommendations: [
      'Bananas',
      'Beets',
      'Leafy greens',
      'Berries',
      'Salmon',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Whole grains',
    ],
    lifestyleRecommendations: [
      'Regular aerobic exercise (brisk walking)',
      'Strength training twice weekly',
      'Yoga for flexibility',
      'Meditation for stress management',
      'Maintain healthy weight',
      'Regular sleep schedule',
    ],
  },
  {
    id: 'bmi',
    name: 'Body Mass Index (BMI)',
    unit: 'kg/m²',
    normalRange: { min: 18.5, max: 24.9 },
    description: 'A measure of body fat based on height and weight',
    foodRecommendations: [
      'Vegetables',
      'Fruits',
      'Whole grains',
      'Lean proteins',
      'Legumes',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Low-fat dairy',
    ],
    lifestyleRecommendations: [
      'Regular aerobic exercise (cycling)',
      'Strength training twice weekly',
      'Yoga for flexibility',
      'Meditation for stress management',
      'Maintain healthy weight',
      'Regular sleep schedule',
    ],
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D',
    unit: 'ng/mL',
    normalRange: { min: 20, max: 50 },
    description: 'Essential vitamin for bone health and immune function',
    foodRecommendations: [
      'Fatty fish (salmon)',
      'Fatty fish (mackerel)',
      'Fortified milk',
      'Fortified orange juice',
      'Egg yolks',
      'Mushrooms (UV-exposed)',
      'Fortified cereals',
      'Fortified yogurt',
      'Cod liver oil',
      'Cheese (fortified)',
      'Beef liver',
    ],
    lifestyleRecommendations: [
      'Safe sun exposure (15-20 minutes/day)',
      'Regular weight-bearing exercise',
      'Yoga for bone health',
      'Outdoor activities when possible',
      'Regular testing if at risk',
      'Consult doctor about supplements',
    ],
  },
  {
    id: 'vitamin-b12',
    name: 'Vitamin B12',
    unit: 'pg/mL',
    normalRange: { min: 200, max: 900 },
    description: 'Essential vitamin for nerve function and red blood cell formation',
    foodRecommendations: [
      'Meat (beef)',
      'Meat (pork)',
      'Poultry (chicken)',
      'Poultry (turkey)',
      'Fish (salmon)',
      'Fish (trout)',
      'Eggs',
      'Dairy products (milk)',
      'Dairy products (cheese)',
      'Fortified cereals',
      'Nutritional yeast',
      'Clams',
      'Liver',
      'Fortified plant milk',
    ],
    lifestyleRecommendations: [
      'Avoid excess alcohol',
      'Regular exercise (walking)',
      'Yoga for overall health',
      'Meditation for stress management',
      'Adequate sleep',
      'Regular testing if at risk',
    ],
  },
  {
    id: 'folate',
    name: 'Folate',
    unit: 'ng/mL',
    normalRange: { min: 2.7, max: 17.0 },
    description: 'B-vitamin essential for cell growth and DNA synthesis',
    foodRecommendations: [
      'Leafy greens (spinach)',
      'Leafy greens (romaine)',
      'Legumes (lentils)',
      'Legumes (black beans)',
      'Asparagus',
      'Brussels sprouts',
      'Avocado',
      'Broccoli',
      'Citrus fruits (oranges)',
      'Beets',
      'Fortified cereals',
      'Papaya',
    ],
    lifestyleRecommendations: [
      'Avoid overcooking vegetables',
      'Regular exercise (running)',
      'Yoga for stress relief',
      'Meditation practice',
      'Adequate sleep',
      'Limit alcohol consumption',
    ],
  },
  {
    id: 'iron',
    name: 'Iron (Serum Iron)',
    unit: 'µg/dL',
    normalRange: { min: 60, max: 170 },
    description: 'Essential mineral for red blood cell production',
    foodRecommendations: [
      'Lean red meat (beef)',
      'Lean red meat (lamb)',
      'Poultry (chicken)',
      'Poultry (turkey)',
      'Fish (tuna)',
      'Fish (salmon)',
      'Shellfish (clams)',
      'Shellfish (oysters)',
      'Legumes (lentils)',
      'Legumes (chickpeas)',
      'Dark leafy greens (spinach)',
      'Dark leafy greens (kale)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Pumpkin seeds',
      'Fortified cereals',
      'Tofu',
      'Eggs',
    ],
    lifestyleRecommendations: [
      'Moderate exercise (walking)',
      'Yoga for overall well-being',
      'Meditation for stress management',
      'Avoid excessive alcohol/caffeine',
      'Ensure adequate hydration',
      'Regular health check-ups',
    ],
  },
  {
    id: 'alt',
    name: 'Alanine Aminotransferase (ALT)',
    unit: 'U/L',
    normalRange: { min: 7, max: 56 },
    description: 'Enzyme that helps break down proteins, indicates liver health',
    foodRecommendations: [
      'Coffee',
      'Green tea',
      'Berries (blueberries)',
      'Berries (raspberries)',
      'Cruciferous vegetables (broccoli)',
      'Fatty fish (salmon)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Olive oil',
      'Garlic',
      'Turmeric',
      'Beetroot',
    ],
    lifestyleRecommendations: [
      'Limit alcohol intake',
      'Avoid toxins',
      'Maintain healthy weight',
      'Regular exercise (walking)',
      'Yoga for liver health',
      'Meditation for stress management',
    ],
  },
  {
    id: 'ast',
    name: 'Aspartate Aminotransferase (AST)',
    unit: 'U/L',
    normalRange: { min: 10, max: 40 },
    description: 'Enzyme found in liver and muscle cells, indicates organ health',
    foodRecommendations: [
      'Coffee',
      'Green tea',
      'Berries (blueberries)',
      'Berries (raspberries)',
      'Cruciferous vegetables (broccoli)',
      'Fatty fish (salmon)',
      'Almonds',
      'Walnuts',
      'Chia seeds',
      'Flax seeds',
      'Olive oil',
      'Garlic',
      'Turmeric',
      'Beetroot',
    ],
    lifestyleRecommendations: [
      'Limit alcohol intake',
      'Avoid toxins',
      'Maintain healthy weight',
      'Regular exercise (walking)',
      'Yoga for liver health',
      'Meditation for stress management',
    ],
  },
];
