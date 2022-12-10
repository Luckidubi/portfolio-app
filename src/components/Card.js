import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
 
  return (
    <>
      <VStack borderRadius="lg" bg="#fff" color="blackAlpha.900">
        <Image w="full" h="full" src={imageSrc} borderRadius="lg" />
        <VStack p="1rem" alignItems="flex-start">
          <Heading size="md">{title}</Heading>
          <Text color="blackAlpha.700">{description}</Text>
          <HStack>
            <p>
              See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </p>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
