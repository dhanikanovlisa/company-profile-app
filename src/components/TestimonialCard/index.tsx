import { Box } from "@chakra-ui/react";
export const TestimonialCard = () => {
  return (
    <>
      <Box bg="tomato" borderRadius={10} padding={10} justifyContent='center' textAlign='center'>
        <h3 className="text-white">This product has changed my life! Highly recommended.</h3>
        <p className="text-orange-100">John Doe</p>
      </Box>
    </>
  );
};
