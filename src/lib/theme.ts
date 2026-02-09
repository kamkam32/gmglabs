import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#E6FAFF',
      100: '#B3F0FF',
      200: '#80E6FF',
      300: '#4DDBFF',
      400: '#1AD1FF',
      500: '#00D4FF',
      600: '#00A8CC',
      700: '#007D99',
      800: '#005266',
      900: '#002733',
    },
    violet: {
      50: '#F0ECFF',
      100: '#D5CCFF',
      200: '#B8A8FF',
      300: '#9B85FF',
      400: '#7B61FF',
      500: '#6B46C1',
      600: '#553AA0',
      700: '#402E7F',
      800: '#2B1F5E',
      900: '#17103D',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
  },
  fonts: {
    heading: `'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(0, 212, 255, 0.3)',
    glowViolet: '0 0 20px rgba(123, 97, 255, 0.3)',
    outline: '0 0 0 3px rgba(0, 212, 255, 0.5)',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'xl',
        transition: 'all 0.2s',
      },
      sizes: {
        sm: { fontSize: 'sm', px: 3, py: 1.5 },
        md: { fontSize: 'md', px: 4, py: 2 },
        lg: { fontSize: 'lg', px: 6, py: 3 },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
          },
          _active: { bg: 'brand.700', transform: 'translateY(0)' },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'rgba(0, 212, 255, 0.1)',
            transform: 'translateY(-1px)',
          },
        },
        ghost: {
          color: 'gray.400',
          _hover: { bg: 'rgba(255,255,255,0.06)', color: 'white' },
        },
      },
      defaultProps: {
        colorScheme: 'brand',
        size: 'md',
        variant: 'solid',
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: '#111118',
          borderRadius: '2xl',
          border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          transition: 'all 0.3s',
          _hover: {
            borderColor: 'rgba(255,255,255,0.16)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'xl',
        },
      },
      variants: {
        outline: {
          field: {
            bg: '#111118',
            borderColor: 'rgba(255,255,255,0.10)',
            color: 'white',
            _hover: { borderColor: 'rgba(255,255,255,0.16)' },
            _focus: {
              borderColor: 'brand.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
            },
            _placeholder: { color: 'gray.500' },
          },
        },
      },
      defaultProps: { variant: 'outline', size: 'md' },
    },
    Textarea: {
      variants: {
        outline: {
          bg: '#111118',
          borderColor: 'rgba(255,255,255,0.10)',
          color: 'white',
          _hover: { borderColor: 'rgba(255,255,255,0.16)' },
          _focus: {
            borderColor: 'brand.500',
            boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
          },
          _placeholder: { color: 'gray.500' },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        color: 'white',
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: 'medium',
        color: 'gray.400',
        mb: 2,
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: '#0A0A0F',
        color: '#A0AEC0',
      },
      '*::placeholder': {
        color: 'gray.500',
      },
    },
  },
})

export default theme
