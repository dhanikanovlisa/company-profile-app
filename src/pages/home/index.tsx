import { Box, Flex } from "@chakra-ui/react";
import { CardPricing } from "../../components/CardPricing";
import { Carousel } from "../../components/Carousel";
import { FeaturesCard } from "../../components/FeaturesCard";
import { TestimonialCard } from "../../components/TestimonialCard";

export const Home = () => {
  return (
    <div>
      <section className="flex items-center justify-center h-screen">
        <Carousel />
      </section>
      <section className="flex items-center p-20 h-screen justify-center">
        <Box w="100%">
          <h1 className="text-4xl text-orange-600 font-bold mb-10 text-center">
            Product Pricing
          </h1>
          <Flex justify="space-between">
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
              title="Standard"
              description="Best for intermediates"
              price={29}
              features={[
                "This is Your Benefit 1",
                "This is Your Benefit 2",
                "This is Your Benefit 3",
                "This is Your Benefit 4",
                "This is Your Benefit 5",
              ]}
            />
            <CardPricing
              title="Pro"
              description="Best for professionals"
              price={49}
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
      <section className="flex items-center justify-center h-screen p-20 align-middle">
        <Box>
          <h1 className="text-4xl text-orange-600 font-bold mb-10 text-center">Features</h1>
          <FeaturesCard />
        </Box>
      </section>
      <section className="lex items-center justify-center h-screen p-20 align-middle">
        <h1 className="text-4xl text-orange-600 font-bold mb-10 text-center">Testimonial</h1>
        {/* <TestimonialCard /> */}
      </section>
    </div>
  );
};
