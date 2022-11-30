import React from "react";

const SortByCompany = ({ companies, setState }) => {
  const handleSelect = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  const departments = companies && companies.map((item) => item.department);
  const uniqueDepartments = [...new Set(departments)];
  return (
    <div>
      <select onChange={handleSelect}>
        <option value="">Choose</option>
        {companies &&
          uniqueDepartments.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SortByCompany;
