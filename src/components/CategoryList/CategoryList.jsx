import React, { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const categoryData = async () => {
      try {
        const res = await fetch("categories.json");
        const result = await res.json();
        setCategorys(result);
      } catch (error) {
        console.log(error);
      }
    };
    categoryData();
  }, []);
  return (
    <div>
      <h2 className="text-5xl text-center mb-4">Job Category List</h2>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 gap-4">
        {categorys.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
