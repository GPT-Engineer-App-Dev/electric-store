import { Box, Container, VStack, Text, Image, SimpleGrid, Heading, Link, Flex, Spacer } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const featuredProducts = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: "$799",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop ABC",
    price: "$1299",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smartwatch 123",
    price: "$299",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" alignItems="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <Spacer />
          <Link href="#" color="white" mx={2}>Home</Link>
          <Link href="#" color="white" mx={2}>Products</Link>
          <Link href="#" color="white" mx={2}>Contact</Link>
          <Box as="button" ml={4}>
            <FaShoppingCart size="24px" />
          </Box>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} width="100%">
            {featuredProducts.map(product => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Heading as="h3" size="md">{product.name}</Heading>
                  <Text mt={2}>{product.price}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;