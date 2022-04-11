import { Actions, SliderState, Filters } from "./types";

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
