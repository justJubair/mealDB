
import { useLoaderData } from 'react-router-dom';

const HomeContent = () => {
    const { meals: searchedMeal } = useLoaderData()
  const {
    idMeal,
    strArea,
    strCategory,
    strMealThumb,
    strInstructions,
    strMeal,
  } = searchedMeal[0];
  console.log(searchedMeal[0]);
  return (
    

         <div className="card lg:card-side bg-base-100 shadow-xl p-8">
     <figure className="w-[1000px]">
       <img src={strMealThumb} alt={strMeal} />
     </figure>
     <div className="card-body">
       <h2 className="card-title">{strMeal}</h2>
       <p>Id: {idMeal}</p>
       <small>{strCategory}</small>
       <small>{strArea}</small>
       <p>
         <small>{strInstructions}</small>
       </p>
       <div className="card-actions justify-end">
         <button className="btn btn-primary">Details</button>
       </div>
     </div>
   </div>
  )
}

export default HomeContent
