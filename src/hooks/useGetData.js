import { useEffect, useState } from "react";

const useGetData = (api) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [api]);
  return data;
};

export default useGetData;
