import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
  Typography,
  SelectChangeEvent,
  InputAdornment,
  alpha,
} from '@mui/material';
import { HealthReading } from '../types/health.types';
import { healthMetrics } from '../data/healthMetrics';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface MetricInputProps {
  onSubmit: (reading: HealthReading) => void;
}

export const MetricInput: React.FC<MetricInputProps> = ({ onSubmit }) => {
  const [selectedMetricId, setSelectedMetricId] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const selectedMetric = healthMetrics.find((m) => m.id === selectedMetricId);

  const handleMetricChange = (event: SelectChangeEvent<string>) => {
    setSelectedMetricId(event.target.value);
    setValue('');
    setError('');
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError('');
  };

  const validateAndSubmit = () => {
    if (!selectedMetric) {
      setError('Please select a health metric');
      return;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      setError('Please enter a valid number');
      return;
    }

    const { min, max } = selectedMetric.normalRange;
    const extendedMin = min * 0.5;
    const extendedMax = max * 1.5;

    if (numericValue < extendedMin || numericValue > extendedMax) {
      setError(`Value seems unrealistic. Please check your input (typical range: ${min}-${max} ${selectedMetric.unit})`);
      return;
    }

    onSubmit({
      metricId: selectedMetricId,
      value: numericValue,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        '& .MuiFormControl-root': {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: alpha('#60a5fa', 0.04),
            },
            '&.Mui-focused': {
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
            },
          },
        },
      }}
    >
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="metric-select-label">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BarChartIcon sx={{ fontSize: 20 }} />
            Select Health Metric
          </Box>
        </InputLabel>
        <Select
          labelId="metric-select-label"
          id="metric-select"
          value={selectedMetricId}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <BarChartIcon sx={{ fontSize: 20 }} />
              Select Health Metric
            </Box>
          }
          onChange={handleMetricChange}
          sx={{
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            },
          }}
        >
          {healthMetrics.map((metric) => (
            <MenuItem
              key={metric.id}
              value={metric.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <BarChartIcon sx={{ fontSize: 20, opacity: 0.7 }} />
              {metric.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedMetric && (
        <Box
          sx={{
            mb: 3,
            p: 2,
            borderRadius: 2,
            backgroundColor: alpha('#60a5fa', 0.04),
            border: '1px solid',
            borderColor: alpha('#60a5fa', 0.1),
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 1,
              fontSize: '0.9rem',
              lineHeight: 1.6,
            }}
          >
            {selectedMetric.description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              fontWeight: 500,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 18 }} />
            Normal range: {selectedMetric.normalRange.min}-{selectedMetric.normalRange.max} {selectedMetric.unit}
          </Typography>
        </Box>
      )}

      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          label="Enter Value"
          type="number"
          value={value}
          onChange={handleValueChange}
          error={!!error}
          helperText={error}
          InputProps={{
            endAdornment: selectedMetric && (
              <InputAdornment position="end">
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                  }}
                >
                  {selectedMetric.unit}
                </Typography>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <Button
        variant="contained"
        onClick={validateAndSubmit}
        fullWidth
        size="large"
        sx={{
          py: 1.5,
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
          },
        }}
      >
        Get Personalized Recommendations
      </Button>
    </Box>
  );
};
