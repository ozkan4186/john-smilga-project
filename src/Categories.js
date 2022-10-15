import React from 'react';

const Categories = ({setCategory}) => {
  return (
    <div className="btn-container">
      <button onClick={()=>setCategory("All")}  className="filter-btn">
        All
      </button>
      <button onClick={()=>setCategory("Breakfast")} className="filter-btn">
        Breakfast
      </button>
      <button onClick={()=>setCategory("Lunch")}  className="filter-btn">
        Lunch
      </button>
      <button   onClick={()=>setCategory("Shakes")} className="filter-btn">
        Shakes
      </button>
    </div>
  );
};

export default Categories;
