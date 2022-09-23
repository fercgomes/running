/* eslint-disable @typescript-eslint/no-unused-vars */
import { CalendarIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Home = (props: never) => {
  const router = useRouter();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />

      <Grid textAlign="center">
        <Heading as="h1" size="lg">
          Linha de Chegada
        </Heading>

        <Text fontSize="xs" color="gray.500">
          Portal sobre corrida e ciclismo
        </Text>

        <Divider marginTop={5} marginBottom={5} />

        <Tooltip
          label="Pesquise por provas perto de você"
          hasArrow
          placement="right-end"
        >
          <Button
            leftIcon={<CalendarIcon />}
            marginBottom={4}
            onClick={() => router.push("/calendario")}
          >
            Calendário de provas
          </Button>
        </Tooltip>

        <Tooltip
          label="Calculadoras e conversores de pace e velocidade, etc."
          hasArrow
          placement="right-end"
        >
          <Button
            leftIcon={<SettingsIcon />}
            marginBottom={4}
            onClick={() => router.push("/ferramentas")}
          >
            Conversores & Calculadoras
          </Button>
        </Tooltip>
      </Grid>
    </Flex>
  );
};

export default Home;
