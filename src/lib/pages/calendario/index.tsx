/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Flex,
  Grid,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import * as geolib from "geolib";
import { SportsEvent } from "lib/types/sports";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  maxDistance?: number;
};

interface HomeProps {
  events: SportsEvent[];
}

const applyFilters = (
  events: SportsEvent[],
  filters: EventFilters,
  bypassDistance?: boolean
) => {
  return events.filter((ev) => {
    let predicate = true;

    if (!bypassDistance && filters.maxDistance) {
      if (ev.distance) {
        const inKms = ev.distance / 1000;
        if (inKms > filters.maxDistance) {
          predicate = false;
        }
      } else {
        predicate = false;
      }
    }

    return predicate;
  });
};

const Calendario = (props: HomeProps) => {
  const { events: rawEvents } = props;
  const toast = useToast();

  const [filters, setFilters] = useState<EventFilters>({});
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [events, setEvents] = useState<SportsEvent[]>(rawEvents);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          setEvents(
            rawEvents.map((ev) => ({
              ...ev,
              distance:
                ev.search_lat && ev.search_long
                  ? geolib.getDistance(
                      {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                      },
                      { latitude: ev.search_lat, longitude: ev.search_long }
                    )
                  : undefined,
            }))
          );
        },
        (error) => {
          toast({
            title:
              "Ative sua localização para mostrarmos os eventos mais próximos de você.",
            status: "warning",
            duration: 2000,
          });
        }
      );
    }
  }, [toast, rawEvents]);

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

        {/* Filter Controls */}
        <Flex direction="row" m={4}>
          {/* Distance in KMs */}
          <Flex direction="column">
            <Text marginBottom={4}>Distância até o evento</Text>

            <Slider
              defaultValue={10}
              min={5}
              max={4000}
              w={200}
              onChange={(val) => setFilters({ ...filters, maxDistance: val })}
              marginRight={4}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>

              <SliderThumb />
            </Slider>
          </Flex>

          <Text>{filters.maxDistance} KMs</Text>
        </Flex>

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
              {applyFilters(events, filters, !location).map((event) => (
                <Tr key={event.name}>
                  <Td>
                    <Link href={event.event_url}>{event.name}</Link>
                  </Td>
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
