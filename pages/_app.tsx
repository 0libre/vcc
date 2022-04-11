import { StrictMode, useContext } from "react";
import { StyleProvider, ThemePicker, View } from "vcc-ui";
import ModeProvider, { ModeContext } from "../src/context/mode";
import Slider from "../src/components/slider";
import "../public/css/styles.css";

const Themed = () => {
  const { mode } = useContext(ModeContext);
  const variant = mode ? "dark" : "light";
  return (
    <ThemePicker variant={variant}>
      <View
        extend={({ theme }) => ({
          background: theme.color.background.primary,
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
        })}
      >
        <Slider />
      </View>
    </ThemePicker>
  );
};

const App = () => (
  <StrictMode>
    <StyleProvider>
      <ModeProvider>
        <Themed />
      </ModeProvider>
    </StyleProvider>
  </StrictMode>
);

export default App;
