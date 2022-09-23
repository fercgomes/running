/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { Pace, Speed } from "lib/types/sports";
import { NextSeo } from "next-seo";
import { useState } from "react";

const paceToSpeed = (pace: Pace): Speed => {
  const totalMinutes = pace.minutes + pace.seconds / 60;
  const speed = 60 / totalMinutes;
  return { unit: "km/h", value: speed };
};

const Ferramentas = (props: never) => {
  const [pace, setPace] = useState<Pace>({
    system: "metric",
    minutes: 4,
    seconds: 30,
  });

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

      <Heading>Pace - Velocidade</Heading>

      <Flex direction="row">
        <Box>
          <FormControl>
            <FormLabel>Minutos</FormLabel>
            <NumberInput
              min={2}
              max={10}
              value={pace.minutes}
              onChange={(valStr, valNum) =>
                setPace({ ...pace, minutes: valNum })
              }
            >
              <NumberInputField />

              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>Segundos</FormLabel>
            <NumberInput
              min={0}
              max={59}
              value={pace.seconds}
              onChange={(valStr, valNum) =>
                setPace({ ...pace, seconds: valNum })
              }
            >
              <NumberInputField />

              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>

        <Text>/km</Text>
      </Flex>

      <Text>Velocidade: {paceToSpeed(pace).value.toFixed(2)} km/h</Text>
    </Flex>
  );
};

export default Ferramentas;
