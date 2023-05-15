import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

;

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"#1A202C"}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text style={{fontWeight:"700",color:"#fff",fontSize:"25px",fontStyle:"italic"}}>Company</Text>
            <Link fontWeight="700" color="#fff" href={"#"}>About Us</Link>
            <Link fontWeight="700" color="#fff" href={"#"}>Blog</Link>
            <Link fontWeight="700" color="#fff"  href={"#"}>Careers</Link>
            <Link fontWeight="700" color="#fff" href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text style={{fontWeight:"700",color:"#fff",fontSize:"25px",fontStyle:"italic"}}>Support</Text>
            <Link fontWeight="700" color="#fff" href={"#"}>Help Center</Link>
            <Link fontWeight="700" color="#fff" href={"#"}>Safety Center</Link>
            <Link fontWeight="700" color="#fff" href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text style={{fontWeight:"700",color:"#fff",fontSize:"25px",fontStyle:"italic"}}>Legal</Text>
            <Link fontWeight="700" color="#fff" href={"#"}>Cookies Policy</Link>
            <Link fontWeight="700" color="#fff" href={"#"}>Privacy Policy</Link>
            <Link fontWeight="700" color="#fff" href={"#"}>Terms of Service</Link>
            <Link fontWeight="700" color="#fff" href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text style={{fontWeight:"700",color:"#fff",fontSize:"25px"}}>Install App</Text>
            <Image
              src="data:image/png;base64,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"
              alt="apple"
            />
            <Image
              src="data:image/png;base64,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"
              alt="apple"
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text fontWeight="700" color="#fff">© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
