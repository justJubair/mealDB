/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link,} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Category = ({ category }) => {
  // eslint-disable-next-line react/prop-types
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    category;
   
   
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src={strCategoryThumb} alt={strCategory} /></figure>
    <div className="card-body">
      <h2 className="card-title">{strCategory}</h2>
      <h3>Category Id: {idCategory}</h3>
     <p>{strCategoryDescription.length > 500 || strCategoryDescription.length < 100 ? 'Savor the exquisite flavors of our Lemon Herb Grilled Salmon. Tender, flaky salmon fillet marinated in zesty lemon, fragrant herbs, and a hint of garlic, then expertly grilled to perfection. This dish is a symphony of fresh, vibrant tastes that will delight your palate and leave you craving for more. Served with a side of seasonal vegetables and buttery garlic mashed potatoes, its a culinary experience thats both light and indulgent. Perfect for those seeking a healthy yet indulgent dining option.' : strCategoryDescription}</p>
      <div className="card-actions justify-end">
        <Link to={`/categories/${strCategory}`} state={strCategory}  className="btn bg-yellow-500">Details</Link>
      </div>
    </div>
  </div>
  );
};

export default Category;
