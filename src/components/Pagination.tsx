import { Button, Stack } from "@chakra-ui/react";
import React from "react";

export default function Pagination() {
  return (
    <Stack>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        1
      </Button>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
          bg: "gray.500",
        }}
      >
        2
      </Button>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
          bg: "gray.500",
        }}
      >
        3
      </Button>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
          bg: "gray.500",
        }}
      >
        4
      </Button>
    </Stack>
  );
}
