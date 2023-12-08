import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    fontSize="16px"
    borderRadius="16px"
    h="56px"
    _hover={{
      bg: secondary ? 'brand.greyDark' : 'brand.primary'
    }}
    bg={secondary ? 'brand.greyDark' : 'brand.primary'}
    textColor={secondary ? 'brand.white' : 'brand.black'}
    {...props}
  >
    {children}
  </ChakraButton>
)
