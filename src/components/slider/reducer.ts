import { Car, Filters } from "./types";

export function sliderReducer(
  state: SliderState,
  action: Actions
): SliderState {
  switch (action.type) {
    case "activeFilter":
      return {
        ...state,
        activeFilter: action.payload,
      };
    case "clearFilters":
      console.log("Clear it");
      return {
        ...state,
        cars: state.cars.map(({ hide, ...car }) => car),
        activeFilter: Filters.all,
      };

    case "addCars": {
      return {
        ...state,
        cars: action.payload,
      };
    }
    case "addIdInView":
      return {
        ...state,
        idsInView: [...state.idsInView, action.payload].sort(
          (a, b) => a.position - b.position
        ),
        activeId: action.payload.id,
      };
    case "removeIdFromView":
      return {
        ...state,
        idsInView: [
          ...state.idsInView.filter(({ id }) => id !== action.payload),
        ],
      };
  }
}

type IdInView = {
  id: string;
  position: number;
};

export type SliderState = {
  activeId: string;
  idsInView: IdInView[];
  cars: Car[];
  activeFilter: Filters;
};

export type ActionsMap = {
  addIdInView: IdInView;
  removeIdFromView: string;
  addCars: Car[];
  activeFilter: Filters;
  clearFilters: void;
};

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];
