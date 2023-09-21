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
      <p className="mb-5">{strInstructions.length > 500 ? 'Savor the exquisite flavors of our Lemon Herb Grilled Salmon. Tender, flaky salmon fillet marinated in zesty lemon, fragrant herbs, and a hint of garlic, then expertly grilled to perfection. This dish is a symphony of fresh, vibrant tastes that will delight your palate and leave you craving for more. Served with a side of seasonal vegetables and buttery garlic mashed potatoes, its a culinary experience thats both light and indulgent. Perfect for those seeking a healthy yet indulgent dining option.' : strInstructions}</p>
      <button onClick={handleGoHome} className="btn bg-yellow-500 border-none">Go Home</button>
    </div>
  </div>
</div>
  )
}

export default SearchMealDetails
