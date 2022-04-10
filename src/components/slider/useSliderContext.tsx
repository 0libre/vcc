import { useContext, useEffect, useCallback, useMemo } from "react";
import { SliderContext } from "./context";
import useDebounce from "../../hooks/useDebounce";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import { Cars, Filters } from "./types";

const useSliderContext = () => {
  const [{ activeId, cars, idsInView, activeFilter }, dispatch] =
    useContext(SliderContext);

  const { maxPosition, minPosition } = idsInView.reduce(
    (prev, curr) => ({
      maxPosition:
        curr.position > prev.maxPosition ? curr.position : prev.maxPosition,
      minPosition:
        curr.position < prev.minPosition ? curr.position : prev.minPosition,
    }),
    {
      maxPosition: -1,
      minPosition: Infinity,
    }
  );

  const debouncedActiveId: string = useDebounce<string>(activeId, 500);

  useEffect(() => {
    if (debouncedActiveId) {
      const hash = `#${debouncedActiveId}`;
      if (window.location.hash !== hash) {
        history.replaceState(null, "", hash);
      }
    }
  }, [debouncedActiveId]);

  const addIdInView = useCallback(
    (id: string) =>
      dispatch("addIdInView", {
        id,
        position: cars.findIndex((car) => car.id === id),
      }),
    [dispatch, cars]
  );

  const removeIdFromView = useCallback(
    (id: string) => dispatch("removeIdFromView", id),
    [dispatch]
  );

  const setCars = useCallback(
    (cars: Cars) => {
      dispatch("addCars", cars);
    },
    [dispatch]
  );

  const filterCars = (bodyType: Filters) => {
    dispatch("activeFilter", bodyType);
    setCars([
      ...cars.map(({ hide, ...car }) =>
        car.bodyType === bodyType ? car : { ...car, hide: true }
      ),
    ]);
  };

  const clearFilters = () => {
    dispatch("clearFilters");
  };

  const { scrollTo } = useScrollIntoView();

  const goForward = () => {
    const car = cars[maxPosition + 1];
    if (car) {
      scrollTo(`#${car.id}`);
    }
  };
  const goBackward = () => {
    const car = cars[minPosition - 1];
    if (car) {
      scrollTo(`#${car.id}`);
    }
  };
  const forwardDisabled = maxPosition + 1 >= cars.length;
  const backwardDisabled = minPosition - 1 <= -1;

  const filteredCars: Cars = useMemo(
    () => cars.filter((car) => !car.hide),
    [cars]
  );

  const bodyTypes = useMemo(() => {
    const bodyTypesArray = Array.from(
      new Set(cars.map(({ bodyType }) => bodyType))
    );
    bodyTypesArray.unshift(Filters.all);
    return bodyTypesArray;
  }, [cars]);

  const hideDesktop: boolean = filteredCars.length <= 4;

  return {
    navigation: {
      goForward,
      goBackward,
      forwardDisabled,
      backwardDisabled,
      hideDesktop,
    },
    data: {
      bodyTypes,
      cars: filteredCars,
      setCars,
    },
    states: {
      activeId,
      addIdInView,
      removeIdFromView,
    },
    filter: {
      activeFilter,
      apply: filterCars,
      clear: clearFilters,
    },
  };
};

export default useSliderContext;
