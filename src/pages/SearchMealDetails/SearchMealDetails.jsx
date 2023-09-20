import { useLoaderData, useNavigate } from "react-router-dom"


const SearchMealDetails = () => {
    const navigate = useNavigate()
    const {meals: detail} = useLoaderData(); 
    const {strMeal, idMeal, strCategory, strMealThumb, strArea, strInstructions} = detail[0];
    // console.log(strInstructions.length)
//     let newDesc;
//    if(strInstructions.length > 595){
//         newDesc = strInstructions.slice(1000)
//    }
    const handleGoHome = ()=>{
        navigate('/')
    }
  return (
    <div className="hero min-h-[calc(100vh-64px)]" style={{backgroundImage: `url(${strMealThumb})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{strMeal}</h1>
      <p>Meal Id: {idMeal}</p>
      <p><small>{strCategory}</small></p>
      <small>{strArea}</small>
      <p className="mb-5">{strInstructions}</p>
      <button onClick={handleGoHome} className="btn bg-yellow-500 border-none">Go Home</button>
    </div>
  </div>
</div>
  )
}

export default SearchMealDetails
