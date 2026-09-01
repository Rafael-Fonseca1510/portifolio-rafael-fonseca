import { createTheme } from '@mui/material/styles'

// Tema dark do Material UI alinhado à paleta do Figma.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#22d3ee',
      light: '#67e8f9',
      dark: '#06b6d4',
      contrastText: '#04121a',
    },
    background: {
      default: '#080b12',
      paper: '#0d1220',
    },
    text: {
      primary: '#e2e8f0',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, "Segoe UI", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: '"JetBrains Mono", monospace',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 20,
          paddingBlock: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(8, 11, 18, 0.6)',
          '& fieldset': { borderColor: 'rgba(255,255,255,0.08)' },
          '&:hover fieldset': { borderColor: 'rgba(34,211,238,0.4)' },
          '&.Mui-focused fieldset': { borderColor: '#22d3ee' },
        },
      },
    },
  },
})

export default theme
