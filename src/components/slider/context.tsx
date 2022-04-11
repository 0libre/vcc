import React, { createContext, useReducer, useCallback } from "react";
import { sliderReducer } from "./reducer";
import { Filters, SliderState, Actions, ActionsMap } from "./types";

type Dispatcher = <
  Type extends Actions["type"],
  Payload extends ActionsMap[Type]
>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void;

type SliderContextInterface = readonly [SliderState, Dispatcher];

const SliderContext = createContext<SliderContextInterface>([
  { activeId: "", idsInView: [], cars: [], activeFilter: Filters.all },
  () => {},
]);

const SliderProvider = ({ children }: any) => {
  const [state, _dispatch] = useReducer(sliderReducer, {
    activeId: "",
    idsInView: [],
    cars: [],
    activeFilter: Filters.all,
  });

  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as Actions);
  }, []);

  return (
    <SliderContext.Provider value={[state, dispatch]}>
      {children}
    </SliderContext.Provider>
  );
};

export { SliderContext, SliderProvider };
