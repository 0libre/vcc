import { useState, createContext } from "react";
import { ModeContextInterface } from "../types/types";

export const ModeContext = createContext<ModeContextInterface>({
  mode: false,
  setMode: () => {},
});

const ModeProvider = ({ children }: any) => {
  const [mode, setMode] = useState(false);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
