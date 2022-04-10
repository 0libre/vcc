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
    <>
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
    </>
  );
};

const Slider: React.FC = () => (
  <SliderProvider>
    <View
      className="slider"
      extend={{
        width: "350px",
        fromL: {
          width: "1225px",
        },
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
