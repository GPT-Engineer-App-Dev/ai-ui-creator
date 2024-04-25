import { Box, Button, Container, Heading, Text, VStack, Input, useToast, Flex, AspectRatio, InputGroup, InputRightElement } from "@chakra-ui/react";
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
    <Container maxW="container.xl" overflow="hidden">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" py={10}>
        <Box flex="1" mr={8}>
          <VStack spacing={8}>
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
        </Box>
        <Box flex="1">
          <InputGroup size="md" mb={4}>
            <Input pr="4.5rem" type="text" placeholder="Enter URL here..." />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">Go</Button>
            </InputRightElement>
          </InputGroup>
          <AspectRatio ratio={16 / 9}>
            <iframe
              title="External Site"
              src="https://example.com"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;