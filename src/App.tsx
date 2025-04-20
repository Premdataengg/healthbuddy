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
            <Box sx={{ mt: 2 }}>
              <a
                href="#gut-diversity"
                style={{
                  color: '#2563eb',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                How to Improve Gut Bacteria Diversity
              </a>
            </Box>
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

          <Box id="gut-diversity" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>
              How to Improve Gut Bacteria Diversity
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: 900, mx: 'auto', color: 'text.secondary' }}>
              A diverse gut microbiome is key to better digestion, immunity, and reduced inflammation. Here’s a summary of gut-healthy foods and their benefits:
            </Typography>
            <Box sx={{ overflowX: 'auto' }}>
              <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <thead>
                  <tr style={{ background: '#e0f2fe' }}>
                    <th style={{ padding: 12, fontWeight: 700, textAlign: 'left' }}>Food Category</th>
                    <th style={{ padding: 12, fontWeight: 700, textAlign: 'left' }}>Examples</th>
                    <th style={{ padding: 12, fontWeight: 700, textAlign: 'left' }}>Gut Microbiome Benefits</th>
                    <th style={{ padding: 12, fontWeight: 700, textAlign: 'left' }}>Anti-Inflammatory Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Prebiotic Fiber (non-digestible carbs)</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Whole grains (oats, brown rice), legumes (beans, lentils), fruits (bananas, apples), vegetables (onions, garlic, artichoke), nuts & seeds</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Feeds beneficial bacteria in the colon, helping them multiply. Increases production of short-chain fatty acids (SCFAs) like butyrate by fermenters (e.g. <i>Bifidobacterium</i>), which in turn improve gut lining integrity and support microbial diversity. A diverse fiber intake fosters a more diverse microbiota (each fiber type selects for different microbes).</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>SCFAs produced from fiber have anti-inflammatory effects, calming immune responses in the gut and even in the bloodstream. High-fiber diets are associated with lower levels of C-reactive protein and other inflammatory markers. Fiber also helps crowd out pathogenic bacteria by promoting healthy competitors.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Fermented Foods (Probiotics)</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Yogurt (with live cultures), kefir, kombucha, kimchi, sauerkraut, miso, tempeh, fermented pickles (brine-fermented)</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Directly adds probiotic organisms to the gut, increasing microbial diversity. Supports populations of <i>Lactobacillus</i>, <i>Bifidobacterium</i>, and other beneficial microbes. Can help rebalance gut flora and inhibit growth of harmful bacteria through organic acids and bacteriocins produced during fermentation.</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Live probiotic bacteria can modulate the immune system – studies show fermented food diets reduce inflammatory markers like IL-6 and decrease activation of immune cells. Beneficial bacteria from these foods produce metabolites (e.g. lactic acid) that lower gut pH and suppress pathogens, indirectly reducing inflammation. Regular intake has been linked to improved gut barrier function and reduced risk of inflammatory bowel disease.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Polyphenol-Rich Foods (colorful plant foods and spices)</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Berries (blueberries, strawberries), cherries, pomegranates, grapes (and red wine in moderation), green tea, coffee, cocoa/dark chocolate, colorful veggies (leafy greens, broccoli, red cabbage), herbs and spices (turmeric, ginger, cumin, cinnamon)</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Polyphenols act as antioxidant micronutrients and also prebiotic-like compounds – many are metabolized by gut microbes. They promote growth of beneficial bacteria and inhibit certain pathogenic microbes. This can increase the abundance of microbes that produce SCFAs and other healthy metabolites. A polyphenol-rich diet is linked to greater microbial diversity and a higher Firmicutes/Bacteroidetes balance favorable for metabolic health.</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Polyphenols have direct anti-inflammatory and antioxidant effects in the body, reducing oxidative stress and downregulating inflammatory pathways. Via the gut, their metabolites (like urolithins from ellagic acid in berries) can suppress inflammation in the colon. Diets high in fruits, vegetables, tea, etc. are associated with lower levels of inflammatory markers and reduced risk of diseases like cardiovascular disease. For example, red wine polyphenols have been tied to increases in butyrate-producers (good for inflammation). Spices like turmeric contain curcumin, which not only is anti-inflammatory but may also improve the gut microbial balance and strengthen the intestinal barrier.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Healthy Fats (Omega-3 and unsaturated fats)</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Fatty fish (salmon, sardines, mackerel), flax & chia seeds, walnuts (for omega-3s); olive oil, avocados, almonds (for monounsaturated fats)</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Diets higher in unsaturated fats (vs. saturated) are linked to more favorable gut microbiota profiles. Omega-3 fatty acids can increase certain beneficial bacteria (some studies note rises in butyrate-producing species) and reduce microbes that promote inflammation. Healthy fats are often consumed with polyphenol-rich plant foods (e.g. olive oil on salads), further supporting microbiome health.</td>
                    <td style={{ padding: 10, verticalAlign: 'top' }}>Omega-3s and unsaturated fats have anti-inflammatory effects, reducing the production of pro-inflammatory cytokines. Diets rich in these fats are associated with lower inflammation and improved gut barrier function.</td>
                  </tr>
                </tbody>
              </table>
            </Box>
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
