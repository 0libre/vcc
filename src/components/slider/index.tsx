import { View } from "vcc-ui";
import { SliderProvider } from "./context";
import { NavButtons, Pills } from "./nav";
import Cars from "./cars";
import Filter from "./filter";

const Slider: React.FC = () => (
  <SliderProvider>
    <View
      className="slider"
      extend={{
        width: "100vw",
      }}
    >
      <Filter />
      <Cars />
      <Pills />
      <NavButtons />
    </View>
  </SliderProvider>
);

export default Slider;
