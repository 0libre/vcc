import React, { useMemo, useContext } from "react";
import {
  View,
  Flex,
  IconButton,
  Spacer,
  Text,
  Toggle,
  Click,
  useTheme,
} from "vcc-ui";
import { ModeContext } from "../../context/mode";
import useSliderContext from "./useSliderContext";
import { PillProps } from "./types";
import Link from "next/link";

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
      showNavigation,
      goForward,
      goBackward,
      forwardDisabled,
      backwardDisabled,
    },
  } = useSliderContext();
  return (
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
      {showNavigation && (
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
      )}
    </View>
  );
};

const Pill: React.FC<PillProps> = ({ id }) => {
  const {
    states: { activeId },
  } = useSliderContext();

  const {
    color: {
      foreground: { primary, secondary },
    },
  } = useTheme();

  const fullId = `#${id}`;
  const isActive = useMemo(() => activeId === id, [activeId]);

  return (
    <Link href={fullId} passHref>
      <Click
        extend={{
          width: "8px",
          height: "8px",
          background: secondary,
          borderRadius: "50%",
          transition: "0.5s",
          ":active": {
            top: "1px",
          },
          ":focus": {
            background: primary,
          },
          ...(isActive ? { background: primary } : {}),
        }}
      />
    </Link>
  );
};

const Pills: React.FC = () => {
  const {
    data: { cars },
    navigation: { showNavigation },
  } = useSliderContext();

  return (
    <Flex
      extend={{
        flexDirection: "column",
        alignItems: "center",
        fromL: {
          display: "none",
        },
      }}
    >
      <Spacer size={3} />
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "5px",
          height: "10px;",
        }}
      >
        {showNavigation && cars.map(({ id }) => <Pill key={id} id={id} />)}
      </Flex>
      <Spacer size={3} />
      <ModeToggle />
    </Flex>
  );
};

export { NavButtons, Pills, ModeToggle };
