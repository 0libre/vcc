import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { View, Text, Link, Flex, Block, Spacer } from "vcc-ui";
import { useInView } from "react-hook-inview";
import useSliderContext from "./useSliderContext";
import { Car } from "./types";

const CarContainer = (car: Car) => {
  const [ref, inView] = useInView({ threshold: 0.35 });
  const {
    states: { addIdInView, removeIdFromView },
  } = useSliderContext();

  const carId = useMemo(() => car.id, [car]);

  useEffect(() => {
    if (inView) {
      addIdInView(carId);
    } else {
      removeIdFromView(carId);
    }
    return () => removeIdFromView(carId);
  }, [inView, carId, addIdInView, removeIdFromView]);

  return (
    <View ref={ref} id={car.id}>
      <Text variant="bates" subStyle="emphasis" foreground="#707070">
        {car.bodyType}
      </Text>
      <View
        extend={{
          flexDirection: "column",
          fromM: {
            flexDirection: "row",
          },
        }}
      >
        <Text variant="columbus" subStyle="emphasis">
          {car.modelName}
        </Text>
        <Spacer size={{ default: 1, "@media (max-width: 768px)": 0 }} />
        <Text variant="columbus" foreground="#707070">
          {car.modelType}
        </Text>
      </View>
      <Spacer size={{ default: 1 }} />
      <Image
        src={car.imageUrl}
        alt={car.modelName}
        width="320px"
        height="240px"
      />
      <Flex extend={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Block extend={{ textAlign: "center" }}>
          <Link href={`/shop/${car.id}`} arrow="right">
            Learn
          </Link>
          <Spacer />
        </Block>
        <Block extend={{ textAlign: "center" }}>
          <Link href={`/learn/${car.id}`} arrow="right">
            Shop
          </Link>
        </Block>
      </Flex>
    </View>
  );
};

export default CarContainer;
