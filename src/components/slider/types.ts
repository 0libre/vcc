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

export type ActionsMap = {
  addIdInView: IdInView;
  removeIdFromView: string;
  addCars: Car[];
  activeFilter: Filters;
  clearFilters: void;
  setActiveId: string;
};

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];
