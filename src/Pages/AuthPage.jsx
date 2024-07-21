import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'

function AuthPage() {
  return (
    <Container
      maxW="container.lg"
      h="100vh" // Take up the full viewport height
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="full"
        maxW="md"
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Login
        </Heading>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" width="100%" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" width="100%" />
          </FormControl>
          {/* Centering the button */}
          <Box textAlign="center">
            <Button colorScheme="teal" size="lg" width="50%" mt={4}>
              Log in
            </Button>
          </Box>
        </Stack>
        <Text mt={4} textAlign="center">
          Do not have an account? Sign up
        </Text>
      </Box>
    </Container>
  )
}

export default AuthPage
