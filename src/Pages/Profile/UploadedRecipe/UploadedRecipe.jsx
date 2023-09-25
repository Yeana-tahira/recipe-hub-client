import React from 'react';
import { Link } from 'react-router-dom';

const UploadedRecipe = ({ recipe }) => {
    const { _id, recipe_photo, category, recipe_name } = recipe;
    return (
        <div className='flex mb-8 items-center gap-10'>
            <img className='w-48' src={recipe_photo} alt="" />
            <div className='grow'>
                <h1 className='font-bold font-serif text-2xl'>{recipe_name}</h1>
                <p className='uppercase'><span className='font-bold'>Category: </span>{category}</p>
            </div>
            <div className='flex-none'>
                <Link to={`/recipeDetails/${_id}`}>
                    <button className='btn btn-sm login'>
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z" /></svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UploadedRecipe;