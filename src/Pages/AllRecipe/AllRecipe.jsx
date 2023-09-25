import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import RecipeTable from './RecipeTable';

const AllRecipe = () => {
    useTitle('Recipes');
    const recipes = useLoaderData();
    console.log(recipes);

    const [query, setQuery] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        const filteredRecipes = recipes.filter((recipe) =>
            recipe.recipe_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecipes(filteredRecipes);
    };


    return (
        <div>
            {/* banner */}
            <div className="hero p-7 mb-10" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/image-portrays-passover-greeting-card-idea-featuring-matzah-nuts-tulip-flowers-arranged_176841-9785.jpg?w=1060)' }}>
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div className="hero-content text-white">
                    <div className="max-w-md">
                        <h1 className=" text-center text-5xl font-serif font-bold">All Recipe</h1>
                    </div>
                </div>
            </div>
            {/* banner */}

            {/* Search */}
            <div className="mx-20 mt-3 flex justify-end relative">
                <input type="text" placeholder="Search Recipe By Name " className="input input-bordered" value={query} onChange={handleSearch} />
                <svg className='absolute top-4 right-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f8cf5f" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
            </div>

            {/* Tabular form */}
            <div className="mx-20 my-12 shadow-2xl">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='font-extrabold text-base'>Recipe</th>
                            <th className='font-extrabold text-base'>Recipe-Category</th>
                            <th className='font-extrabold text-base'>Recipe By</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        filteredRecipes.map(recipe => <RecipeTable
                            key={recipe._id}
                            recipe={recipe}
                        ></RecipeTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllRecipe;