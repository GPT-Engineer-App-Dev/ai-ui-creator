import { Box, Button, Container, Heading, Text, VStack, Input, useToast } from "@chakra-ui/react";
import { FaBrain, FaCode, FaLightbulb } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleCodeAnalysis = () => {
    toast({
      title: "Code Analysis",
      description: "Your code has been analyzed. No issues found!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleAIAssist = () => {
    toast({
      title: "AI Assistance",
      description: "AI suggestions have been generated. Check your console!",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    console.log("AI Suggestion: Consider using memoization to optimize your function.");
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          AI Software Engineer Command Center
        </Heading>
        <Text fontSize="xl">
          Welcome to your AI-powered software engineering platform. Utilize the tools below to enhance your coding experience.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Input placeholder="Enter your code snippet here..." size="lg" />
            <Button leftIcon={<FaCode />} colorScheme="blue" onClick={handleCodeAnalysis}>
              Analyze Code
            </Button>
            <Button leftIcon={<FaLightbulb />} colorScheme="orange" onClick={handleAIAssist}>
              Get AI Suggestions
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;