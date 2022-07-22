import {
    extendTheme,
    theme as base,
    withDefaultColorScheme,
    withDefaultVariant,
  } from "@chakra-ui/react";
  import { mode } from "@chakra-ui/theme-tools";
  const replaceExsiting = {
    variants: {
      filled: {
        field: {
          _focus: {
            borderColor: "brand.500",
            color: "red.500",
            backgroundColor: "red"

          },
          
          borderColor:'gray',
          borderRadius:"10px",
          borderWidth:"1px",
          color:"green.500",
        },
        _placeholder:{  color: 'red.500' },
      },
    },
    sizes: {
      md: {
        field: {
          borderRadius: "none",
        },
      },
    },
  };
  
  const theme = extendTheme(
    {
      colors: {
        brand: {
          50: "#f5fee5",
          100: "#e1fbb2",
          200: "#cdf781",
          300: "#b8ee56",
          400: "#a2e032",
          500: "#8ac919",
          600: "#71ab09",
          700: "#578602",
          800: "#3c5e00",
          900: "#203300",
        },
      },
  
      fonts: {
        heading: `Montserrat, ${base.fonts.heading} `,
        body: "Inter",
      },
      components: {
        Button: {
          variants: {
            primary: (props) => ({
              
              _focus: {
                // ring: 2,
                // ringColor: "brand.500",
              },
              backgroundColor: 'gray',
              color: mode("brand.900", "brand.700")(props),
              fontSize: "20px",
              borderRadius:"20px",
              bgGradient:'linear(to-r, green.200, pink.500)',
              _hover: {
                backgroundColor: 'gray',
                color: 'red.500',
                border:'none',
              },
            }),

          },
        },

        Text: {
          baseStyle: props => ({
            color:"red",
            fontSize:"50px",
            _hover: {
              color: 'green',
            }
          })
        },

        ListItem: {
          baseStyle: props => ({
            color:"red",
            fontSize:"50px",
            _hover: {
              color: 'green',
            }
          })
        },


        Heading: {
          baseStyle: props => ({
            color:"pink",
            fontSize:"50px",
            _hover: {
              color: 'blue',
            }
          })
        },
        Textarea: {
          variants: {
            filled: {
              _focus: {
                borderColor: "brand.500",
              },
              borderColor:'gray',
              borderRadius:"10px",
              borderWidth:"1px",
              fontSize: "20px",
              color:"green.500",
              
            },
          },
          sizes: {
            md: {
              borderRadius: "none",
              
            },
          },
        },
        layerStyles: {
          base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
          },
          selected: {
            bg: 'teal.500',
            color: 'teal.700',
            borderColor: 'orange.500',
          },
        },
        Input: { ...replaceExsiting },
        Select: {
          baseStyle: {
            control: {
              borderColor:'blue',
              _hover: {
                backgroundColor: 'red',
              },
            },          
          }, 
        },
        option:{
          ...replaceExsiting
        },
        Checkbox: {
          baseStyle: {
            control: {
              _focus: {
                ring: 2,
                ringColor: "brand.500",
              },
              borderColor:'red',
              _hover: {
                backgroundColor: 'white',
              },
            },
           
          },
        },
      },
    },
    withDefaultColorScheme({
      colorScheme: "brand",
    }),
    withDefaultVariant({
      variant: "filled",
      components: ["Input", "Select", "Textarea"],
    })
  );
  
  export default theme;