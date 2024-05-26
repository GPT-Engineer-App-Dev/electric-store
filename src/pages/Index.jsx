import { Box, Container, VStack, Text, Image, SimpleGrid, Heading, Link, Flex, Spacer, IconButton } from "@chakra-ui/react";
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
      <Flex as="nav" bg="blue.800" color="white" padding="1.5rem">
        <Box>
          <Heading size="lg">ElectroShop</Heading>
        </Box>
        <Spacer />
        <Box>
          <Link margin="1rem" href="#">Home</Link>
          <Link margin="1rem" href="#">Products</Link>
          <Link margin="1rem" href="#">Contact</Link>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </Box>
      </Flex>
      <Container maxW="container.xl" centerContent py={10}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">Welcome to ElectroShop</Heading>
          <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={10}>
          {featuredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" fontSize="xl" my="2">
                    {product.name}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" color="gray.600">
                    {product.price}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;