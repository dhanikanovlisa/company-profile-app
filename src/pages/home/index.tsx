import { Box, Flex } from "@chakra-ui/react";
import { CardPricing } from "../../components/CardPricing";
import { Carousel } from "../../components/Carousel";

export const Home = () => {
  return (
    <div>
      <section className="flex items-center justify-center h-screen">
        <Carousel />
      </section>
      <section className="flex items-center justify-center h-screen">
        <Box>
          <h1 className="text-4xl text-orange-600 font-bold mb-10 text-center">
            Product Pricing
          </h1>
          <Flex width="100%" gap={50} justifyContent='space-between'>
            <CardPricing
            title="Basic"
            description="Best for beginners"
            price={0}
            features={[
              "This is Your Benefit 1",
              "This is Your Benefit 2",
              "This is Your Benefit 3",
              "This is Your Benefit 4",
              "This is Your Benefit 5",
            ]}
          />
           <CardPricing
            title="Basic"
            description="Best for beginners"
            price={0}
            features={[
              "This is Your Benefit 1",
              "This is Your Benefit 2",
              "This is Your Benefit 3",
              "This is Your Benefit 4",
              "This is Your Benefit 5",
            ]}
          />
           <CardPricing
            title="Basic"
            description="Best for beginners"
            price={0}
            features={[
              "This is Your Benefit 1",
              "This is Your Benefit 2",
              "This is Your Benefit 3",
              "This is Your Benefit 4",
              "This is Your Benefit 5",
            ]}
            />
          </Flex>
        </Box>
      </section>
      <section className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-orange-600 font-bold">Features</h1>
      </section>
      <section className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-orange-600 font-bold">Testimonial</h1>
      </section>
    </div>
  );
};
