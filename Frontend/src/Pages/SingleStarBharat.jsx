import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  import { MdMovieFilter } from "react-icons/md";
  import { useParams } from "react-router-dom";
  import { useSelector, useDispatch } from "react-redux";
  import {SingleSuperbharatData} from "../Redux/StarBharat/action.js";

  export default function SingleStarBharat() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.starBharatReducer?.starbharat);
    console.log(state);
  
    useEffect(() => {
      dispatch(SingleSuperbharatData(id));
    }, []);
  
    return (
      <Box>
        {}
  
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={state.image}
                align={"center"}
                w={"70%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {state.name}
                </Heading>
                <Text
                  color={useColorModeValue("gray.400", "gray.400")}
                  fontWeight={800}
                  fontSize={"2xl"}
                >
                  <span style={{ color: "#000", fontWeight: "800" }}>
                    Genre of Movie
                  </span>{" "}
                  {state.Genre}
                </Text>
              </Box>
  
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue("gray.800", "gray.900")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                    fontStyle={"italic"}
                  >
                    {state.plot}
                  </Text>
                </VStack>
  
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Movie Details
                  </Text>
  
                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Director :
                      </Text>{" "}
                      {state.directed}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Genre
                      </Text>{" "}
                      {state.Genre}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Released
                      </Text>{" "}
                      {state.Released}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Reviews
                      </Text>{" "}
                      {state.reviews}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Country
                      </Text>{" "}
                      {state.country}
                    </ListItem>
                  </List>
                </Box>
              </Stack>
  
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Watch Movie ➡️ <MdMovieFilter />
              </Button>
  
            
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  