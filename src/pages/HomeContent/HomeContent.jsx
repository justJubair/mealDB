import { Link, useLoaderData } from "react-router-dom";

const HomeContent = () => {
  const { meals: searchedMeal } = useLoaderData();

  const {
    idMeal,
    strArea,
    strCategory,
    strMealThumb,
    strInstructions,
    strMeal,
  } = searchedMeal[0];
 
  return (
   <div>
   
    <div className="card lg:card-side bg-base-100 shadow-xl p-8">
      <figure>
        <img src={strMealThumb} alt={strMeal} />
      </figure>
      <div className="card-body w-11/12">
        <h2 className="card-title">{strMeal}</h2>
        <p>Id: {idMeal}</p>
        <small>{strCategory}</small>
        <small>{strArea}</small>
        <p>{strInstructions}</p>
        <div className="card-actions justify-end">
          <Link to={`/search/details/${idMeal}`} state={strMeal} className="btn bg-yellow-500">Details</Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default HomeContent;
