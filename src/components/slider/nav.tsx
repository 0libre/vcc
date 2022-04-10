import React, { useMemo } from "react";
import { View, Flex, IconButton, Spacer } from "vcc-ui";
import useSliderContext from "./useSliderContext";
import { PillProps } from "./types";

const NavButtons = () => {
  const {
    navigation: {
      hideDesktop,
      goForward,
      goBackward,
      forwardDisabled,
      backwardDisabled,
    },
  } = useSliderContext();
  return hideDesktop ? (
    <View
      extend={{
        untilL: {
          display: "none",
        },
      }}
    >
      <Spacer size={5} />
    </View>
  ) : (
    <View
      extend={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        untilL: {
          display: "none",
        },
      }}
    >
      <IconButton
        variant="outline"
        iconName="navigation-chevronback"
        onClick={goBackward}
        disabled={backwardDisabled}
      />
      <IconButton
        variant="outline"
        iconName="navigation-chevronforward"
        onClick={goForward}
        disabled={forwardDisabled}
      />
    </View>
  );
};

const Pill = ({ id }: PillProps) => {
  const {
    states: { activeId },
  } = useSliderContext();
  const fullId = `#${id}`;
  const className = useMemo(
    () => (activeId === id ? "active" : "inactive"),
    [id, activeId]
  );
  return <a className={className} href={fullId} />;
};

const Pills = () => {
  const {
    data: { cars },
  } = useSliderContext();
  return (
    <>
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
        {cars.map(({ id }) => (
          <Pill key={id} id={id} />
        ))}
      </Flex>
    </>
  );
};

export { NavButtons, Pills };
