import React from 'react';
import { Container, Box, Typography, Paper, ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material';
import { MetricInput } from './components/MetricInput';
import { Recommendations } from './components/Recommendations';
import { HealthReading } from './types/health.types';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#059669',
      light: '#34d399',
      dark: '#047857',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

function App() {
  const [reading, setReading] = React.useState<HealthReading | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMetricSubmit = (newReading: HealthReading) => {
    setReading(newReading);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          py: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 4, sm: 6 },
              px: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2.25rem', sm: '3rem' },
                mb: 2,
              }}
            >
              HealthBuddy
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                lineHeight: 1.6,
              }}
            >
              Your personal health companion for tracking metrics and getting expert recommendations
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gap: 4,
              gridTemplateColumns: {
                xs: '1fr',
                md: reading ? '350px 1fr' : '1fr',
              },
              alignItems: 'start',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148, 163, 184, 0.1)',
                maxWidth: reading ? 'auto' : 600,
                mx: reading ? 'auto' : 'auto',
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
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                Track Your Health Metrics
              </Typography>
              <MetricInput onSubmit={handleMetricSubmit} />
            </Paper>

            {reading && <Recommendations reading={reading} />}
          </Box>

          <Box sx={{ mt: 6, textAlign: 'center', px: 2 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: '0.875rem',
              }}
            >
              Disclaimer: HealthBuddy provides general health recommendations. Always consult with healthcare professionals for medical advice.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
