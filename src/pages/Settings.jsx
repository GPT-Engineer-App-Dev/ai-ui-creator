import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Settings = () => {
  return (
    <Container maxW="container.xl">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading as="h2" size="xl">Settings</Heading>
        <Text mt={4}>Manage your personal settings here.</Text>
      </Box>
    </Container>
  );
};

export default Settings;