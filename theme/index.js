import {
  theme as base,
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant
} from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const inputSelectStyles = {
  variants: {
    outline: {
      field: {
        _focus: {
          borderColor: 'brand.400',
          boxShadow: '0 0 0 0.5px #ab47bc'
        }
      }
    },
    flushed: {
      field: {
        _focus: {
          borderColor: 'brand.400',
          boxShadow: '0 0 0 0.5px #ab47bc'
        }
      }
    }
  }
}

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500'
  }
}

const theme = extendTheme({
  config: { ...config },
  colors: {
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391'
    },
    brand: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c'
    }
  },
  fonts: {
    heading: `Montserrat,${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`
  },
  components: {
    Input: { ...inputSelectStyles },
    NumberInput: { ...inputSelectStyles },
    Select: { ...inputSelectStyles },
    Checkbox: {
      baseStyle: {
        control: {
          ...brandRing
        }
      }
    },
    Button: {
      variants: {
        primary: (props) => ({
          ...brandRing,
          color: mode('white', 'gray.200')(props),
          backgroundColor: mode('brand.500', 'brand.500')(props),
          _hover: {
            backgroundColor: mode('brand.400', 'brand.400')(props)
          },
          _active: {
            backgroundColor: mode('brand.400', 'brand.400')(props)
          }
        }),
        danger: (props) => ({
          ...brandRing,
          backgroundColor: '#E53E3E',
          borderColor: '#F56565',
          _hover: {
            backgroundColor: '#F56565'
          },
          _active: {
            backgroundColor: '#F56565'
          }
        })
      }
    }
  }
},
withDefaultColorScheme({
  colorScheme: 'brand',
  components: ['Checkbox']
}),
withDefaultVariant({
  variant: 'outline',
  components: ['Input', 'Select']
})
)
export default theme
