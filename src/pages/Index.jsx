import { Box, Button, Container, Heading, Text, VStack, Input, useToast, Flex, AspectRatio, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { FaBrain, FaCode, FaLightbulb, FaPlay } from "react-icons/fa";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (winner || board[index]) return;
    const boardCopy = [...board];
    boardCopy[index] = isXNext ? 'X' : 'O';
    setBoard(boardCopy);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <Button onClick={() => handleClick(index)} size="lg" p={8}>
      {board[index]}
    </Button>
  );

  return (
    <VStack spacing={4}>
      <Box>
        {winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}
      </Box>
      <Flex>
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </Flex>
      <Flex>
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </Flex>
      <Flex>
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </Flex>
    </VStack>
  );
};
  const toast = useToast();
  const [url, setUrl] = useState('https://example.com');
  const [iframeUrl, setIframeUrl] = useState(url);

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
            <Input pr="4.5rem" type="text" placeholder="Enter URL here..." value={url} onChange={(e) => setUrl(e.target.value)} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setIframeUrl(url)}>Go</Button>
            </InputRightElement>
          </InputGroup>
          <AspectRatio ratio={16 / 9}>
            <iframe
              title="External Site"
              src={iframeUrl}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        </Flex>
        <TicTacToe />
    </Container>
  );
};

export default Index;