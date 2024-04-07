import React from "react";
import { useSelector } from "react-redux";

export const CarValue = () => {
  // instead of getting the whole state object we destructure it here in selector function
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};
