import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@chakra-ui/react";

const NextNavigator: React.FC<{ label: string; route: string }> = ({
  label,
  route,
}) => {
  return (
    <Link as={RouterLink} to={route} w="100%">
      <Button
        w="100%"
        h="60px"
        mt={6}
        borderRadius={0}
        background={"#8155FE"}
        textColor="white"
      >
        {label}
      </Button>
    </Link>
  );
};

export default NextNavigator;
