import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const color = useColorModeValue("black", "whiteAlpha.900");
  const LinkStyle = {
    p: 2,
    color: color,
    borderRadius: "md",
    position: "relative",

    _before: !active
      ? {
          content: '""',
          position: "absolute",
          bottom: "12%",
          left: "50%",
          h: "1px",
          w: 0,
          transition: "all 200ms ease",
          bg: color,
        }
      : {
          content: '""',
          position: "absolute",
          bottom: "12%",
          left: 0,
          h: "1px",
          w: "100%",
          transition: "all 200ms ease",
          bg: color,
        },
    _hover: !active
      ? {
          _before: {
            left: 0,
            w: "100%",
          },
        }
      : {},
  };
  return (
    <NextLink href={href} passHref>
      <Link {...LinkStyle}>{children}</Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          w={{ base: "full", md: "auto" }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/customtemplates" path={path}>
            Custom Templates
          </LinkItem>
          <LinkItem href="/wiki" path={path}>
            Wiki
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/customtemplates" passHref>
                  <MenuItem as={Link}>Custom Templates</MenuItem>
                </NextLink>
                <NextLink href="/wiki" passHref>
                  <MenuItem as={Link}>Wiki</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
