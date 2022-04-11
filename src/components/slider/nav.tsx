import React, { useMemo, useContext } from "react";
import { View, Flex, IconButton, Spacer, Text, Toggle } from "vcc-ui";
import { ModeContext } from "../../context/mode";
import useSliderContext from "./useSliderContext";
import { PillProps } from "./types";

const ModeToggle: React.FC = () => {
  const { mode, setMode } = useContext(ModeContext);
  const handleToggle = () => setMode((old) => !old);
  return (
    <>
      <Text>Dark mode</Text>
      <Toggle
        checked={mode}
        aria-label="Toggle Label"
        onChange={handleToggle}
      />
    </>
  );
};

const NavButtons: React.FC = () => {
  const {
    navigation: {
      hideNavigation,
      goForward,
      goBackward,
      forwardDisabled,
      backwardDisabled,
    },
  } = useSliderContext();
  return hideNavigation ? (
    <View
      extend={{
        untilL: {
          display: "none",
        },
      }}
    >
      <Spacer size={7} />
    </View>
  ) : (
    <View
      extend={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        untilL: {
          display: "none",
        },
      }}
      padding={2}
    >
      <div>
        <ModeToggle />
      </div>
      <Flex extend={{ flexDirection: "row" }}>
        <IconButton
          variant="outline"
          iconName="navigation-chevronback"
          onClick={goBackward}
          disabled={backwardDisabled}
        />
        <Spacer size={1} />
        <IconButton
          variant="outline"
          iconName="navigation-chevronforward"
          onClick={goForward}
          disabled={forwardDisabled}
        />
      </Flex>
    </View>
  );
};

const Pill: React.FC<PillProps> = ({ id }) => {
  const {
    states: { activeId },
  } = useSliderContext();

  const fullId = `#${id}`;
  const className = useMemo(
    () => (activeId === id ? "active" : "inactive"),
    [id, activeId]
  );

  return <a className={`pill ${className}`} href={fullId} />;
};

const Pills: React.FC = () => {
  const {
    data: { cars },
    navigation: { hideNavigation },
  } = useSliderContext();

  return (
    <View>
      <Spacer size={3} />
      <Flex
        extend={{
          flexDirection: "row",
          columnGap: "5px",
          justifyContent: "center",
          height: "10px;",
          fromL: {
            display: "none",
          },
        }}
      >
        {!hideNavigation && cars.map(({ id }) => <Pill key={id} id={id} />)}
      </Flex>
      <View alignItems={"center"}>
        <ModeToggle />
      </View>
    </View>
  );
};

export { NavButtons, Pills, ModeToggle };
