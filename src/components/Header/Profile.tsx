import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        {showProfileData && (
          <Box mr="4" textAlin="right">
            <Text>Matheus Martinez</Text>
            <Text color="gray.300" fontSize="small">
              matheus.rmartinez@gmail.com
            </Text>
          </Box>
        )}
      </Box>
      <Avatar
        size="md"
        name="Matheus Martinez"
        src="https://github.com/matheusrmartinez.png"
      />
    </Flex>
  );
}
