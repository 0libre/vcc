import { useState, createContext } from "react";
import { ModeContextInterface } from "../types/types";

export const ModeContext = createContext<ModeContextInterface>({
  toggle: () => {},
  mode: false,
  choosenTheme: "light",
});

const ModeProvider = ({ children }: any) => {
  const [mode, setMode] = useState(false);
  const choosenTheme = mode ? "dark" : "light";
  const toggle = () => setMode((old) => !old);

  return (
    <ModeContext.Provider value={{ mode, toggle, choosenTheme }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
