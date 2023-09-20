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
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src={strCategoryThumb} alt={strCategory} /></figure>
    <div className="card-body">
      <h2 className="card-title">{strCategory}</h2>
      <h3>Category Id: {idCategory}</h3>
      <p>{strCategoryDescription}</p>
      <div className="card-actions justify-end">
        <button onClick={handleDetails} className="btn btn-primary">Details</button>
      </div>
    </div>
  </div>
  );
};

export default Category;
