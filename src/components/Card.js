import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
      <HStack >
        <VStack
          backgroundColor={"white"}
          borderRadius={"3xl"}
          textColor={"Black"}
          alignItems={"flex-start"}
          marginBottom={"2"}
        >
          <Image src={imageSrc} borderRadius={"xl"} />
          <VStack spacing={2} padding={4} alignItems="flex-start">
            <Heading size="md"  >{title}</Heading>
            <Text>
              {description}
            </Text>
            <HStack>
              <Text fontWeight={"bold"}>See More</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </div>
  );
};

export default Card;
