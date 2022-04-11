import React, { useEffect } from "react";
import useSliderContext from "./useSliderContext";
import useVolvoAPI from "../../hooks/useVolvoAPI";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import Car from "./car";
import URLS from "../../URLS.json";
import { View } from "vcc-ui";

const Cars: React.FC = () => {
  const { VolvoAPI } = useVolvoAPI();
  const {
    data: { cars, setCars },
  } = useSliderContext();
  const { scrollTo } = useScrollIntoView();

  useEffect(() => {
    const handleGetCars = async () => {
      const data = await VolvoAPI.getData(URLS.CARS);
      setCars(data);
      if (window.location.hash) {
        scrollTo(window.location.hash);
      }
    };
    handleGetCars();
  }, [VolvoAPI, scrollTo, setCars]);

  return (
    <View
      className="slides"
      padding={2}
      extend={{
        overflowX: "auto",
        flexDirection: "row",
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
        scrollSnapAlign: "start",
      }}
    >
      {cars
        .filter((car) => !car.hide)
        .map((car) => (
          <Car key={car.id} car={car} />
        ))}
    </View>
  );
};

export default Cars;
