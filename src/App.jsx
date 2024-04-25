import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Link, Box } from '@chakra-ui/react';
import { FaHome, FaUser } from 'react-icons/fa';
import Index from "./pages/Index.jsx";
import Settings from './pages/Settings.jsx';

function App() {
  const Navbar = () => (
    <Flex bg="brand.900" color="white" mb={4} p={3} align="center">
      <Box p="2">
        <Link href="/" p={2}><FaHome /> Home</Link>
      </Box>
      <Box p="2">
        <Link href="/settings" p={2}><FaUser /> Settings</Link>
      </Box>
    </Flex>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;