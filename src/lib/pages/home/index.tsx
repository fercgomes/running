import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { SportsEvent } from "lib/types/sports";

interface HomeProps {
  events: SportsEvent[];
}

const Home = (props: HomeProps) => {
  const { events } = props;

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />

      <Grid textAlign="center">
        <Heading as="h1" size="lg">
          Calendário de Provas
        </Heading>

        <Text fontSize="xs" color="gray.500">
          Use o calendário abaixo para buscar por eventos esportivos
        </Text>

        {events.map((event) => (
          <div key={event.name}>
            <p>{event.name}</p>
          </div>
        ))}
      </Grid>
    </Flex>
  );
};

export default Home;
