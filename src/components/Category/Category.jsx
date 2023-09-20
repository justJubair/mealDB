// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Category = ({ category }) => {
  // eslint-disable-next-line react/prop-types
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    category;
    const navigate = useNavigate();
    const handleDetails = ()=>{
    navigate(`/categories/${strCategory}`)
    }
  return (
    <div className="border-2 border-gray-200 p-4 text-center space-y-2 flex flex-col">
      <img src={strCategoryThumb} alt="" />
      <h3 className="font-semibold">Category Id: {idCategory}</h3>
      <h2 className="font-bold text-xl text-green-600">{strCategory}</h2>
      <p className="text-gray-500 flex-grow text-xs">
        <small>{strCategoryDescription}</small>
      </p>
      <button onClick={handleDetails} className="btn bg-green-400">Details</button>
    </div>
  );
};

export default Category;
