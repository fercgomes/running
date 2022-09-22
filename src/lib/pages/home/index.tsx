/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from "@chakra-ui/react";
import CTASection from "lib/components/samples/CTASection";
import SomeText from "lib/components/samples/SomeText";
import { NextSeo } from "next-seo";

const Home = (props: never) => {
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

      <SomeText />
      <CTASection />
    </Flex>
  );
};

export default Home;
