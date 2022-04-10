import { useMemo } from "react";

const useVolvoAPI = () => {
  const getData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Something went wrong");
    }
  };
  return useMemo(
    () => ({
      VolvoAPI: {
        getData,
      },
    }),
    []
  );
};

export default useVolvoAPI;
