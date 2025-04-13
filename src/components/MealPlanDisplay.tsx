import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Chip,
  Button,
  Divider,
  Grid,
  alpha,
  useTheme,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { WeeklyMealPlan } from '../types/mealplan.types';
import { healthMetrics } from '../data/healthMetrics';

interface MealPlanDisplayProps {
  mealPlan: WeeklyMealPlan;
}

export const MealPlanDisplay: React.FC<MealPlanDisplayProps> = ({ mealPlan }) => {
  const [currentDay, setCurrentDay] = useState(0);
  const [currentMeal, setCurrentMeal] = useState('breakfast');
  const theme = useTheme();

  const metric = healthMetrics.find((m) => m.id === mealPlan.metricId);
  
  if (!metric) {
    return null;
  }

  const handleDayChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentDay(newValue);
  };

  const handleMealChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentMeal(newValue);
  };

  const getDayLabel = (index: number) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayIndex = (today.getDay() + index) % 7;
    return days[dayIndex];
  };

  const getCurrentMeal = () => {
    const dailyPlan = mealPlan.days[currentDay];
    
    switch (currentMeal) {
      case 'breakfast':
        return dailyPlan.breakfast;
      case 'lunch':
        return dailyPlan.lunch;
      case 'dinner':
        return dailyPlan.dinner;
      case 'snacks':
        return dailyPlan.snacks[0]; // Just showing the first snack for simplicity
      default:
        return dailyPlan.breakfast;
    }
  };

  const meal = getCurrentMeal();
  const placeholderImageUrl = `https://source.unsplash.com/300x200/?${encodeURIComponent(meal.name.toLowerCase())}`;

  return (
    <Box sx={{ mt: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '20px',
            padding: '2px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: 'text.primary',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <RestaurantIcon /> Your Personalized Meal Plan
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Target Health Metric:
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {metric.name}
            </Typography>
            <Chip
              label={mealPlan.currentValue > mealPlan.targetValue ? "Reduce" : "Increase"}
              color={mealPlan.currentValue > mealPlan.targetValue ? "error" : "success"}
              size="small"
              sx={{
                fontWeight: 500,
                px: 1,
              }}
            />
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.9rem',
              lineHeight: 1.6,
            }}
          >
            This meal plan is designed to help {mealPlan.currentValue > mealPlan.targetValue ? "lower" : "raise"} your {metric.name} 
            from {mealPlan.currentValue} {metric.unit} to a target of {mealPlan.targetValue} {metric.unit}.
            Following this plan consistently, along with recommended lifestyle changes, can help improve your health metrics.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={currentDay}
            onChange={handleDayChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: 3,
              '& .MuiTab-root': {
                minWidth: 100,
                fontWeight: 500,
              },
            }}
          >
            {mealPlan.days.map((_, index) => (
              <Tab key={index} label={getDayLabel(index)} />
            ))}
          </Tabs>

          <Tabs
            value={currentMeal}
            onChange={handleMealChange}
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                minWidth: 'auto',
                fontWeight: 500,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
              },
            }}
          >
            <Tab 
              icon={<BreakfastDiningIcon />} 
              label="Breakfast" 
              value="breakfast"
            />
            <Tab 
              icon={<LunchDiningIcon />} 
              label="Lunch" 
              value="lunch"
            />
            <Tab 
              icon={<DinnerDiningIcon />} 
              label="Dinner" 
              value="dinner"
            />
            <Tab 
              icon={<LocalCafeIcon />} 
              label="Snacks" 
              value="snacks"
            />
          </Tabs>

          <Card 
            elevation={0}
            sx={{ 
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: alpha(theme.palette.primary.main, 0.1),
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={meal.imageUrl || placeholderImageUrl}
              alt={meal.name}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {meal.name}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {meal.description}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    Ingredients
                  </Typography>
                  <List dense>
                    {meal.ingredients.map((ingredient, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemText primary={ingredient} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    Preparation
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {meal.preparation}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    Nutritional Benefits
                  </Typography>
                  <Typography variant="body2">
                    {meal.nutritionalBenefits}
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                  variant="outlined" 
                  onClick={() => {
                    const searchQuery = encodeURIComponent(`${meal.name} recipe healthy`);
                    window.open(`https://www.eatingwell.com/search?q=${searchQuery}`, '_blank');
                  }}
                >
                  Find Similar Recipes
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
            }}
          >
            This meal plan is personalized based on your health metrics. Always consult with a healthcare professional or registered dietitian before making significant changes to your diet.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
