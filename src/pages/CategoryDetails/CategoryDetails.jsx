
import { useLoaderData, useParams } from "react-router-dom";
import SingleMeal from "../../components/SingleMeal/SingleMeal";

const CategoryDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const { name: categoryTitle } = useParams();
  const { meals } = useLoaderData();
  // console.log(meals);
  return (
    <div className="bg-slate-50">
      <div className="my-8 text-center font-bold text-xl">
        <h2>Category: <span className="text-yellow-500">{categoryTitle}</span></h2>
        <h2>Total number of recipes: <span className="text-red-500">{meals.length}</span></h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid gap-8 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          meals.map(meal=> <SingleMeal key={meal.idMeal} meal={meal}/>)
        }
      </div>
    </div>
  );
};

export default CategoryDetails;
