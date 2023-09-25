import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UploadedRecipe from "../../Profile/UploadedRecipe/UploadedRecipe";

const OtherProf = ({user}) => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    const uploadedRecipe = recipes.filter((recipe) => user.name === recipe.recipe_provider);
    console.log(uploadedRecipe);

    return (
        <div>
            {/* banner */}
            <div className="hero p-12" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-winter-broccoli-soup-with-copy-space-bread_23-2148706413.jpg?w=1380&t=st=1693756034~exp=1693756634~hmac=ff678c0993c9950a68c6ba91a888bd48e87f40ca9d092d9da9aab14c3e92cb07)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content  text-white">
                    <div className="max-w-md">
                        <h1 className="text-center text-3xl font-serif font-bold">{user.name}</h1>
                    </div>
                </div>
            </div>
            {/* banner */}

            <div className='flex justify-center pl-8 gap-24 lg:flex-row'>
                <div className='w-2/3 mt-10'>
                    <Tabs>
                        <TabList className='lg:flex justify-start gap-5 lg:mx-0 mx-20 mb-8'>
                            <Tab><button className='btn bg-black text-white'>Uploaded Recipe</button></Tab>
                        </TabList>

                        <TabPanel>
                            <div className='pr-16'>
                                {
                                    uploadedRecipe.map(recipe => <UploadedRecipe
                                        key={recipe._id}
                                        recipe={recipe}
                                    ></UploadedRecipe>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="card w-80 bg-opacity-60 shadow-xl -top-11">
                    <div className="avatar w-50 mx-auto">
                        <div className="w-28 rounded-full">
                            <img src={user.photo} />
                        </div>
                    </div>
                    <div className="card-body px-10 bg-opacity-80 items-center text-center">
                        <h2 className="card-title text-lg font-extrabold font-mono">{user.name}</h2>
                        <p className='text-sm'>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherProf;