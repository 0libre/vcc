import { View, TabNav, TabNavItem, Spacer } from "vcc-ui";
import { SliderProvider } from "./context";
import { NavButtons, Pills } from "./nav";
import Cars from "./cars";
import useSliderContext from "./useSliderContext";
import { Filters } from "./types";

const BSFilter = () => {
  const {
    filter: { apply, clear, activeFilter },
    data: { bodyTypes },
  } = useSliderContext();

  return (
    <View
      extend={{
        maxWidth: "100vw",
      }}
    >
      <TabNav enableLineTransition>
        {bodyTypes.map((bodyType) => (
          <TabNavItem
            key={bodyType}
            isActive={activeFilter === bodyType}
            onClick={() => {
              bodyType === Filters.all ? clear() : apply(bodyType);
            }}
          >
            {bodyType.toLocaleUpperCase()}
          </TabNavItem>
        ))}
      </TabNav>
      <Spacer size={5} />
    </View>
  );
};

const Slider: React.FC = () => (
  <SliderProvider>
    <View
      className="slider"
      extend={{
        width: "100vw",
      }}
    >
      <BSFilter />
      <Cars />
      <Pills />
      <NavButtons />
    </View>
  </SliderProvider>
);

export default Slider;
