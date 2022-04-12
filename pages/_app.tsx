import { StrictMode, useContext } from "react";
import {
  styleRenderer,
  StyleProvider,
  ThemePicker,
  View,
  Logo,
  Spacer,
} from "vcc-ui";

import ModeProvider, { ModeContext } from "../src/context/mode";
import Slider from "../src/components/slider";

const Themed = () => {
  const { mode } = useContext(ModeContext);
  const variant = mode ? "dark" : "light";
  return (
    <ThemePicker variant={variant}>
      <View
        extend={({ theme }) => ({
          background: theme.color.background.primary,
          height: "auto",
          minHeight: "100vh",
          width: "100vw",
          justifyContent: "center",
        })}
      >
        <Spacer size={6} />
        <Logo type="spreadmark" height={12} />
        <Spacer size={6} />
        <Slider />
        <Spacer size={6} />
      </View>
    </ThemePicker>
  );
};

const App = () => {
  const renderer = styleRenderer();
  renderer.renderStatic(
    {
      margin: 0,
      padding: 0,
    },
    "body"
  );
  renderer.renderStatic({ transition: "transform 0.2s" }, "img.car-image");
  renderer.renderStatic({ transform: "scale(1.1)" }, " img.car-image:hover");
  renderer.renderStatic({ display: "none" }, "::-webkit-scrollbar");

  return (
    <StrictMode>
      <StyleProvider renderer={renderer}>
        <ModeProvider>
          <Themed />
        </ModeProvider>
      </StyleProvider>
    </StrictMode>
  );
};

export default App;
