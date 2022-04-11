import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ModeContextInterface = {
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
};

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
