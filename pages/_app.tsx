import { StrictMode } from "react";
import { StyleProvider, ThemePicker, View, Flex } from "vcc-ui";
import Slider from "../src/components/slider";
import "../public/css/styles.css";

const HomePage = () => (
  <StrictMode>
    <StyleProvider>
      <ThemePicker variant="light">
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
    </StyleProvider>
  </StrictMode>
);

export default HomePage;
