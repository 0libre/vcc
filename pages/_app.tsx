import { StrictMode } from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Slider from "../src/components/slider";
import "../public/css/styles.css";

const HomePage = () => (
  <StrictMode>
    <StyleProvider>
      <ThemePicker variant="light">
        <Slider />
      </ThemePicker>
    </StyleProvider>
  </StrictMode>
);

export default HomePage;
