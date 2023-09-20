// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Category from '../Category/Category';

const Categories = () => {
    const categories = useLoaderData();
    // console.log(categories.categories)
  return (
    <div className='max-w-screen-lg mx-auto'>
      <h1 className='text-2xl font-semibold text-center mt-10 italic'>Categories</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-10'>
      {
        categories.categories.map(category=> <Category key={category.idCategory} category={category}/>)
      }
    </div>
    </div>
  )
}

export default Categories
