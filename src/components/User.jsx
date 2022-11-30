import React, { useEffect } from "react";
import useGetData from "../hooks/useGetData";
import UserItem from "./UserItem";

const User = ({ search, setState, companies }) => {
  const data = useGetData(
    "https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood"
  );

  const filteredData =
    data &&
    data.filter((item) => {
      return companies
        ? item.name.toLowerCase().startsWith(search.toLowerCase()) &&
            item.department === companies
        : item.name.toLowerCase().startsWith(search.toLowerCase());
    });

  useEffect(() => {
    setState(data);
  }, [data, setState]);

  if (!filteredData) return <div>Loading...</div>;

  return (
    <div className="employee-container">
      {filteredData.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default User;
