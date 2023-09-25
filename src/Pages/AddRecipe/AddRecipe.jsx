import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddRecipe = () => {
    useTitle('Share Recipe');
    const { user } = useContext(AuthContext);

    const handleAddRecipe = event => {
        event.preventDefault();
        const form = event.target;
        const recipe = form.recipe.value;
        const video = form.video.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const ingredients = form.ingredients.value;
        const description = form.description.value;

        const recipes = {
            recipe_name: recipe,
            video,
            recipe_provider: name,
            email,
            recipe_photo: photo,
            user_photo: user?.photoURL,
            category,
            ingredients,
            description
        };

        console.log(recipes);

        fetch('http://localhost:5000/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Recipe has been shared',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                form.reset();
            })
    }
    return (
        <div className='pb-12'>
            {/* banner */}
            <div className="hero p-7 mb-20" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/cheese-fruit-meat-board-dark-background-seen-from-top-with-empty-space-text_176841-11221.jpg?w=1060)' }}>
                <div className="hero-overlay bg-[#f8cf5f] bg-opacity-40"></div>
                <div className="hero-content text-white">
                    <div className="max-w-md">
                        <h1 className=" text-center text-5xl font-serif font-bold">Share Your Recipe</h1>
                    </div>
                </div>
            </div>
            {/* banner */}

            {/* form */}
            <form onSubmit={handleAddRecipe} className="bg-gradient-to-b from-[#f8cf5f] to-white mx-2 lg:mx-48 shadow-2xl lg:px-24 py-12 rounded-xl ">
                <div className="lg:flex gap-12 mb-6">
                    <div className="lg:flex items-center gap-14">
                        <p className="font-mono">Recipe </p>
                        <input className="input input-bordered" type="text" name="recipe" placeholder="Enter Recipe Name" id="" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Video</p>
                        <input className="input input-bordered" type="url" name="video" placeholder="Recipe Video Link" id="" />
                    </div>
                </div>
                <div className="flex gap-12 mb-6">
                    <div className="flex items-center gap-7">
                        <p className="font-mono">Your  Name</p>
                        <input className="input input-bordered" defaultValue={user?.displayName} type="text" name="name" placeholder="Enter your Name" id="" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Email</p>
                        <input className="input input-bordered" type="email" name="email" defaultValue={user?.email} placeholder="Enter Your Email" id="" />
                    </div>
                </div>
                <div className="flex gap-14 mb-6">
                    <div className="flex items-center gap-10">
                        <p className="font-mono">Category</p>
                        <select id="countries" name='category' className=" text-gray-900 text-sm rounded-md w-52 focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a category</option>
                            <option value="breakfast-delights">Breakfast Delights</option>
                            <option value="comfort-food-classics">Comfort Food Classics</option>
                            <option value="healthy-eats">Healthy Eats</option>
                            <option value="quick_and_easy-meals">Quick & Easy Meals</option>
                            <option value="vegetarian-creations">Vegetarian Creations</option>
                            <option value="non-veg_and_meat-delights">Non-veg & Meat Delights</option>
                            <option value="sweet-treats_and_desserts">Sweet Treats & Desserts</option>
                            <option value="appetizers_and_snacks">Appetizers & Snacks</option>
                            <option value="grilling_and_bbq-specialties">Grilling & BBQ Specialties</option>
                            <option value="pasta_and_noodle-galore">Pasta & Noodle Galore</option>
                            <option value="soups_and_stews">Soups & Stews</option>
                            <option value="seafood-specialties">Seafood Specialties</option>
                            <option value="kid-friendly_fare">Kid-Friendly Fare</option>
                            <option value="fresh_and_flavorful-salads">Fresh & Flavorful Salads</option>
                            <option value="drinks_and_beverages">Drinks & Beverages</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Photo</p>
                        <input className="input input-bordered" type="url" name="photo" placeholder="Recipe Photo" id="" />
                    </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <p className="font-mono">Ingredients</p>
                    <textarea className="textarea textarea-bordered h-[100px] mr-10 w-full" name="ingredients" placeholder='Recipe Ingredients Here...' id="" cols="10" rows="10"></textarea>
                </div>
                <div className="flex items-center gap-3">
                    <p className="font-mono">Description</p>
                    <textarea className="textarea textarea-bordered h-[100px] mr-10 w-full" name="description" placeholder='Share full process of the recipe...' id="" cols="10" rows="10"></textarea>
                </div>
                <div className="form-control w-1/2 mt-6 mx-auto">
                    <input type="submit" className="btn font-serif text-lg login rounded-3xl" value="Add Recipe" />
                </div>
            </form>
        </div>
    );
};

export default AddRecipe;