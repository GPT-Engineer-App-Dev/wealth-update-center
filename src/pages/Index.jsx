import { Box, Container, Flex, Heading, HStack, Image, Input, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px solid #e2e8f0">
        <Box>
          <Heading as="h1" size="lg">Financial Times</Heading>
        </Box>
        <HStack as="nav" spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">World</Link>
          <Link href="#">Business</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Opinion</Link>
          <Link href="#">Life & Arts</Link>
          <Link href="#">More</Link>
        </HStack>
        <Box>
          <Input placeholder="Search" width="200px" />
          <FaSearch style={{ marginLeft: '-30px', color: '#718096' }} />
        </Box>
      </Flex>

      {/* Main Content Area */}
      <Flex as="main" py={6} direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3" pr={{ md: 4 }}>
          {/* Featured Article */}
          <Box mb={6}>
            <Image src="https://via.placeholder.com/800x400" alt="Featured Article" />
            <Heading as="h2" size="xl" mt={4}>Featured Article Headline</Heading>
            <Text mt={2}>Brief description of the featured article. This is a summary that gives readers an idea of what the article is about.</Text>
          </Box>

          {/* Other Articles Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 1" />
              <Heading as="h3" size="md" mt={2}>Article 1 Headline</Heading>
              <Text mt={1}>Brief description of the article.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 2" />
              <Heading as="h3" size="md" mt={2}>Article 2 Headline</Heading>
              <Text mt={1}>Brief description of the article.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 3" />
              <Heading as="h3" size="md" mt={2}>Article 3 Headline</Heading>
              <Text mt={1}>Brief description of the article.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 4" />
              <Heading as="h3" size="md" mt={2}>Article 4 Headline</Heading>
              <Text mt={1}>Brief description of the article.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sidebar */}
        <Box flex="1" pl={{ md: 4 }} mt={{ base: 6, md: 0 }}>
          <Box mb={6}>
            <Heading as="h3" size="lg" mb={4}>Most Read</Heading>
            <VStack align="start" spacing={2}>
              <Link href="#">Most Read Article 1</Link>
              <Link href="#">Most Read Article 2</Link>
              <Link href="#">Most Read Article 3</Link>
              <Link href="#">Most Read Article 4</Link>
              <Link href="#">Most Read Article 5</Link>
            </VStack>
          </Box>
          <Box mb={6}>
            <Heading as="h3" size="lg" mb={4}>Latest News</Heading>
            <VStack align="start" spacing={2}>
              <Link href="#">Latest News Article 1</Link>
              <Link href="#">Latest News Article 2</Link>
              <Link href="#">Latest News Article 3</Link>
              <Link href="#">Latest News Article 4</Link>
              <Link href="#">Latest News Article 5</Link>
            </VStack>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>Market Data</Heading>
            <VStack align="start" spacing={2}>
              <Text>Market Data 1</Text>
              <Text>Market Data 2</Text>
              <Text>Market Data 3</Text>
              <Text>Market Data 4</Text>
              <Text>Market Data 5</Text>
            </VStack>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" py={4} justifyContent="space-between" alignItems="center" borderTop="1px solid #e2e8f0">
        <HStack spacing={4}>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </HStack>
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
      </Flex>
    </Container>
  );
};

export default Index;