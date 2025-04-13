import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, useTheme } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { FoodPreparation } from '../types/food.types';

interface FoodPreparationModalProps {
  open: boolean;
  onClose: () => void;
  foodName: string;
  preparation: FoodPreparation;
}

const FoodPreparationModal: React.FC<FoodPreparationModalProps> = ({
  open,
  onClose,
  foodName,
  preparation,
}) => {
  const theme = useTheme();

  const handleRecipeClick = () => {
    // Construct the search URL for eatingwell.com with "recipe" added to the search
    const searchQuery = encodeURIComponent(`${foodName.toLowerCase()} recipe`);
    const searchUrl = `https://www.eatingwell.com/search?q=${searchQuery}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 2,
          p: 2,
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h6" component="div">
          How to Prepare: {foodName}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.primary.main }}>
            Preparation Instructions:
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            {preparation.preparation}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button 
          onClick={handleRecipeClick} 
          color="primary" 
          variant="contained"
          startIcon={<OpenInNewIcon />}
          sx={{
            textTransform: 'none',
            borderRadius: 2,
            px: 3,
          }}
        >
          Find Recipes on EatingWell
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FoodPreparationModal;
