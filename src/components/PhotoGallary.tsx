import { Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoGallary: React.FC<{ images: any }> = ({ images }) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <PhotoProvider>
      <Flex w="100%" flexWrap={"wrap"} gap="4" p={4} alignItems={"center"}>
        {images.map((src: any, index: number) => (
          <PhotoView src={src}>
            <Image
              src={src}
              alt=""
              w={"30%"}
              h={100}
              borderRadius={"4px"}
              data-aos="zoom-in"
            />
          </PhotoView>
        ))}
      </Flex>
    </PhotoProvider>
  );
};

export default PhotoGallary;
