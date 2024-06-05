import { Box, Divider, Flex, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Box bg="#ff3d24" padding={10}>
        <Flex justifyContent={"space-between"}>
          <div className="flex justify-center items-center w-20 h-10 ml-10">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="mr-10">
            <p>Join Our Newsletter</p>
            <Flex gap={10}>
              <Input
                borderRadius={6}
                padding={4}
                placeholder="johndoe@gmail.com"
                textColor='tomato'
                onChange={(e => setEmail(e.target.value))}
              />
              <Button
                bg="#ffffff"
                color="tomato"
                alignSelf="center"
                paddingX={20}
                paddingY={4}
                borderRadius={5}
                fontWeight={700}
                onClick={() => console.log(`Email: ${email}`)}
              >
                Submit
              </Button>
            </Flex>
          </div>
        </Flex>
        <div className="flex flex-row items-center space-x-10 mt-10 ml-10 mr-10 justify-between">
          <p className="text-white">© 2023 All rights reserved</p>
          <div className="flex flex-row space-x-20">
          <span className="slide-indicator absolute bottom-0 left-0 h-1 bg-white w-full transform scale-x-0 transition-transform duration-200 ease-out"></span>
          {["Home", "Product", "Features", "Testimonial"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center cursor-pointer  text-white font-bold hover:text-orange-900 hover:bg-[--secondary-2] rounded-lg transition-colors duration-200 ease-in-out"
              onClick={() => console.log(`${item} clicked`)}
            >
              {item}
            </div>
          ))}
          </div>
        </div>
      </Box>
    </>
  );
};
