import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  alpha,
  Button,
} from '@mui/material';
import { HealthReading } from '../types/health.types';
import { healthMetrics } from '../data/healthMetrics';
import { foodPreparations } from '../data/foodPreparations';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FoodPreparationModal from './FoodPreparationModal';

interface RecommendationsProps {
  reading: HealthReading;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ reading }) => {
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const metric = healthMetrics.find((m) => m.id === reading.metricId);
  
  if (!metric) {
    return null;
  }

  const getStatusColor = () => {
    const value = reading.value;
    const { min, max } = metric.normalRange;
    
    if (value < min) return 'warning';
    if (value > max) return 'error';
    return 'success';
  };

  const getStatusText = () => {
    const value = reading.value;
    const { min, max } = metric.normalRange;
    
    if (value < min) return 'Below Normal Range';
    if (value > max) return 'Above Normal Range';
    return 'Within Normal Range';
  };

  const handleFoodClick = (food: string) => {
    setSelectedFood(food);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  const getFoodPreparation = (food: string) => {
    const preparations = foodPreparations[reading.metricId] || {};
    const preparation = preparations[food];
    return preparation || { preparation: '', recipeUrl: '' };
  };

  return (
    <Box>
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
            }}
          >
            Your Health Insights
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {metric.name}:
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {reading.value} {metric.unit}
            </Typography>
            <Chip
              label={getStatusText()}
              color={getStatusColor()}
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
            {metric.description}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
              color: 'primary.main',
            }}
          >
            <RestaurantIcon />
            Recommended Foods
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
              },
              gap: 2,
            }}
          >
            {metric.foodRecommendations.map((food, index) => (
              <Button
                key={index}
                onClick={() => handleFoodClick(food)}
                sx={{
                  p: 0,
                  textAlign: 'left',
                  textTransform: 'none',
                }}
              >
                <Paper
                  sx={{
                    width: '100%',
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor: alpha('#60a5fa', 0.04),
                    border: '1px solid',
                    borderColor: alpha('#60a5fa', 0.1),
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: alpha('#60a5fa', 0.08),
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <LocalDiningIcon sx={{ color: 'primary.main', opacity: 0.7 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      flex: 1,
                    }}
                  >
                    {food}
                  </Typography>
                  <ChevronRightIcon
                    sx={{
                      color: 'primary.main',
                      opacity: 0.7,
                      fontSize: 20,
                    }}
                  />
                </Paper>
              </Button>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
              color: 'secondary.main',
            }}
          >
            <SelfImprovementIcon />
            Lifestyle Recommendations
          </Typography>
          <List sx={{ p: 0 }}>
            {metric.lifestyleRecommendations.map((recommendation, index) => (
              <ListItem
                key={index}
                sx={{
                  px: 2,
                  py: 1.5,
                  backgroundColor: index % 2 === 0 ? alpha('#34d399', 0.04) : 'transparent',
                  borderRadius: 1,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: alpha('#34d399', 0.08),
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <FitnessCenterIcon sx={{ color: 'secondary.main', opacity: 0.7 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                      }}
                    >
                      {recommendation}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>

      {selectedFood && (
        <FoodPreparationModal
          open={true}
          onClose={handleCloseModal}
          foodName={selectedFood}
          preparation={getFoodPreparation(selectedFood)}
        />
      )}
    </Box>
  );
};
