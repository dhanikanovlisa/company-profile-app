import { Box, Card, CardBody, Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

interface CardPricingProps {
  title: string;
  description: string;
  price: number;
  features: string[];
}

export const CardPricing = (props: CardPricingProps) => {
  return (
    <Card
      bg="tomato"
      borderRadius={5}
      p={4}
      padding={10}
      boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
      _hover={{
        transform: "translateY(-10px) scale(1.1) ",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardBody alignContent='center' display="flex" flexDirection="column">
        <Box padding={10} textAlign="left">
          <h3 className="font-bold">{props.title}</h3>
          <Box display="flex" alignItems="baseline">
            <h2 className="text-4xl font-bold">
              {" "}
              {props.price == 0 ? "Free" : "$" + props.price}
            </h2>
            {props.price != 0 ? <p>/month</p> : ""}
          </Box>
          <p>{props.description}</p>
        </Box>

        <Box padding={10}>
          {props.features.map((feature, index) => (
            <Flex key={index} alignItems="baseline">
              <FaCheckCircle />
              <p className="ml-2">{feature}</p>
            </Flex>
          ))}
        </Box>
        <Button
          bg="#ffffff"
          color="tomato"
          alignSelf="center"
          paddingX={20}
          paddingY={4}
          borderRadius={5}
          fontWeight={700}
          _hover={{
            bg: "teal",
            color: "#ffffff",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          Start Now
        </Button>
      </CardBody>
    </Card>
  );
};
