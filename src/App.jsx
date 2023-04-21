import * as API from "./services/launches";
import { useState, useEffect } from "react";
import logo from "./assets/logo-spacex.png";
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";

export const App = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={4} src={logo} width={300}/>
      <Heading as="h1" size="2xl" m={4}>
        SpaceX Launches
        </Heading>
      <section>
        {launches.map((launch) => (
          <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius={"lg"}>
            <Flex>
              <Text fontSize="xl">
                Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Flex align="center">
              <HiCalendar /> 
              <Text fontSize="md" ml={2}>
                {launch.launch_date_local.split("T")[0]}
              </Text>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  );
};
