import { Flex } from "@chakra-ui/react";
export const TestimonialCard = () => {
  const content = [
    {
      image: "./image1.jpg",
      feature: "Easy Sort, Classify, and Search",
    },
    {
      image: "./image1.jpg",
      feature: "Easy Sort, Classify, and Search",
    },
    {
      image: "./image1.jpg",
      feature: "Easy Sort, Classify, and Search",
    },
    {
      image: "./image1.jpg",
      feature: "Easy Sort, Classify, and Search",
    },
    {
      image: "./image1.jpg",
      feature: "Easy Sort, Classify, and Search",
    },
  ];
  return (
    <>
    <Flex>
        {content.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
            <img src={item.image} alt="" className="h-20 w-20 rounded-full" />
            <p className="text-orange-500 font-bold text-lg text-center">{item.feature}</p>
            </div>
        ))}
    </Flex>
    </>
  );
};
