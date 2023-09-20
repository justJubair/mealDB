/* eslint-disable react/prop-types */


const SingleMeal = ({meal}) => {
  const {idMeal, strMeal, strMealThumb} = meal
  return (
    <div className="card bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{strMeal}</h2>
      <h3>Meal Id: {idMeal}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, molestias?</p>
      <div className="card-actions">
        <button className="btn bg-yellow-500">Eat now</button>
      </div>
    </div>
  </div>
  )
}

export default SingleMeal
