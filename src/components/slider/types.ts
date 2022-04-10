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
