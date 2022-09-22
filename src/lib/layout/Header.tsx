import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Image src="/runner.png" width={7} marginRight={5} />

      <Flex justify="flex-start">
        <Flex direction="column" marginRight={10}>
          <Link href="/">Linha de Chegada</Link>
          <Text fontSize="xs" color="gray">
            Portal Esportivo
          </Text>
        </Flex>

        <Link marginRight={10} href="/calendario">
          Calendário
        </Link>
      </Flex>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
