import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    
    <div>
      <div className="w-[400px] rounded-md shadow mx-auto">
        <h1 className="text-5xl font-bold">{city.main.temp} °C</h1>
        <h1 className="text-3xl font-semibold">{city.name}</h1>
        <h1 className="text-3xl font-semibold">{city.sys.country}</h1>
      </div>
      
    </div>
  );
};

export default City;
