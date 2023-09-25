import useTitle from "../../../hooks/useTitle";
import './Home.css';
import { Outlet, useLoaderData } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import breakfast from '../../../assets/breakfast.jpg';
import comfort from '../../../assets/comfort.jpg';
import healthy from '../../../assets/healthy.jpg';
import quick from '../../../assets/quick.jpg';
import vegan from '../../../assets/vegan.jpg';
import nonVeg from '../../../assets/nonVeg.jpg';
import sweet from '../../../assets/sweet.jpg';
import snacks from '../../../assets/snacks.jpg';
import grill from '../../../assets/grill.jpg';
import pasta from '../../../assets/pasta.jpg';
import soup from '../../../assets/soup.jpg';
import seafood from '../../../assets/seafood.jpg';
import kid from '../../../assets/kid.jpg';
import salad from '../../../assets/salad.jpg';
import drinks from '../../../assets/drinks.jpg';
import other from '../../../assets/other.jpg';
import MainHome from "../MainHome/MainHome";
import { useEffect, useState } from "react";

const Home = () => {
    useTitle('Home');
    const [category, setCategory] = useState('');
    const recipes = useLoaderData();
    const [recipe, setRecipe] = useState(recipes);

    useEffect(() => {
        fetch(`http://localhost:5000/recipes?category=${category}`)
        .then(res => res.json())
        .then(data => {
            setRecipe(data)
        })
    },[recipe])

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <div className="grid grid-cols-4 my-12 gap-10">
                    {
                        recipe.map(rcp => <MainHome
                            key={rcp._id}
                            rcp={rcp}
                        ></MainHome>)
                    }
                </div>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-base-200">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="p-4 w-80 h-full text-zinc-700 ">
                    {/* Sidebar content here */}
                    <li><button onClick={() => setCategory('')} className="side-btn flex p-2 rounded-md items-center gap-2"><FaHome /> Home</button></li>
                    <div className="divider"></div>
                    <p className="mb-5 font-serif font-bold text-xl">Discover Categories</p>
                    <li><button onClick={() => setCategory('breakfast-delights')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={breakfast} alt="" />
                        Breakfast Delights
                    </button></li>
                    <li><button onClick={() => setCategory('comfort-food-classics')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={comfort} alt="" />
                        Comfort Food Classics
                    </button></li>
                    <li><button onClick={() => setCategory('healthy-eats')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={healthy} alt="" />
                        Healthy Eats
                    </button></li>
                    <li><button onClick={() => setCategory('quick_and_easy-meals')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={quick} alt="" />
                        Quick and Easy Meals
                    </button></li>
                    <li><button onClick={() => setCategory('vegetarian-creations')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={vegan} alt="" />
                        Vegetarian Creations
                    </button></li>
                    <li><button onClick={() => setCategory('non-veg_and_meat-delights')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={nonVeg} alt="" />
                        Non-veg and Meat Delights
                    </button></li>
                    <li><button onClick={() => setCategory('sweet-treats_and_desserts')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={sweet} alt="" />
                        Sweet Treats and Desserts
                    </button></li>
                    <li><button onClick={() => setCategory('appetizers_and_snacks')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={snacks} alt="" />
                        Appetizers and Snacks
                    </button></li>
                    <li><button onClick={() => setCategory('grilling_and_bbq-specialties')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={grill} alt="" />
                        Grilling and BBQ Specialties
                    </button></li>
                    <li><button onClick={() => setCategory('pasta_and_noodle-galore')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={pasta} alt="" />
                        Pasta and Noodle Galore
                    </button></li>
                    <li><button onClick={() => setCategory('soups_and_stews')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={soup} alt="" />
                        Soups and Stews
                    </button></li>
                    <li><button onClick={() => setCategory('seafood-specialties')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={seafood} alt="" />
                        Seafood Specialties
                    </button></li>
                    <li><button onClick={() => setCategory('kid-friendly_fare')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={kid} alt="" />
                        Kid-Friendly Fare
                    </button></li>
                    <li><button onClick={() => setCategory('fresh_and_flavorful-salads')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={salad} alt="" />
                        Fresh and Flavorful Salads
                    </button></li>
                    <li><button onClick={() => setCategory('drinks_and_beverages')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={drinks} alt="" />
                        Drinks and Beverages
                    </button></li>
                    <li><button onClick={() => setCategory('others')} className="side-btn flex p-2 rounded-md items-center gap-2">
                        <img className="w-10 rounded-full" src={other} alt="" />
                        Others
                    </button></li>
                </ul>

            </div>
        </div>
    );
};

export default Home;