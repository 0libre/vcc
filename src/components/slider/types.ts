export enum Filters {
  all = "all",
  suv = "suv",
  estate = "estate",
  sedan = "sedan",
}

export type Car = {
  id: string;
  modelName: string;
  bodyType: Filters;
  modelType: string;
  imageUrl: string;
  hide?: boolean;
};

export type Cars = Car[];

export type CarProps = {
  car: Car;
};

export type PillProps = {
  id: string;
};

export type IdInView = {
  id: string;
  position: number;
};

export type MaxAndMin = {
  maxPosition: number;
  minPosition: number;
};

export type SliderState = {
  activeId: string;
  idsInView: IdInView[];
  cars: Car[];
  activeFilter: Filters;
};

export type SliderActionsMap = {
  addIdInView: IdInView;
  removeIdFromView: string;
  addCars: Car[];
  activeFilter: Filters;
  clearFilters: void;
  setActiveId: string;
};

export type SliderActions = {
  [Key in keyof SliderActionsMap]: {
    type: Key;
    payload: SliderActionsMap[Key];
  };
}[keyof SliderActionsMap];
