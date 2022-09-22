/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Flex,
  Grid,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { SportsEvent } from "lib/types/sports";

const runningTypeDict = {
  running: "Corrida",
  cycling: "Ciclismo",
};

const surfaceTypeDict = {
  road_race: "Corrida de Rua",
};

const distancesStr = (dists: number[]) => dists.map((d) => `${d}km`).join(", ");

type EventFilters = {
  name?: string;
  type?: ("running" | "cycling")[];
  confirmed_date?: {
    start?: Date;
    end?: Date;
  };
  surface_type?: "road_race"[];
  city_name?: string;
  state?: string;
  country?: string;
  distances?:
    | number
    | {
        start?: number;
        end?: number;
      };
};

interface HomeProps {
  events: SportsEvent[];
}

const Calendario = (props: HomeProps) => {
  const { events } = props;

  // const [filters, setFilters] = useState<EventFilters>({});

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

      <Grid textAlign="center" w="full">
        <Heading as="h1" size="lg">
          Calendário de Provas
        </Heading>

        <Text fontSize="xs" color="gray.500">
          Use o calendário abaixo para buscar por eventos esportivos
        </Text>

        <TableContainer marginTop={4} overflowY="scroll">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Tipo</Th>
                <Th>Distâncias</Th>
                <Th>Data confirmada</Th>
                <Th>Superfície</Th>
                <Th>Cidade</Th>
                <Th>Estado</Th>
                <Th>País</Th>
              </Tr>
            </Thead>

            <Tbody>
              {events.map((event) => (
                <Tr key={event.name}>
                  <Td>{event.name}</Td>
                  <Td>{runningTypeDict[event.type]}</Td>
                  <Td>{distancesStr(event.distances)}</Td>
                  <Td>{event.confirmed_date}</Td>
                  <Td>{surfaceTypeDict[event.surface_type]}</Td>
                  <Td>{event.city_name}</Td>
                  <Td>{event.state}</Td>
                  <Td>{event.country}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Grid>
    </Flex>
  );
};

export default Calendario;
