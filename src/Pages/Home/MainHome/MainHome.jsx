import { Link } from 'react-router-dom';
import './MainHome.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const MainHome = ({ rcp }) => {
    const { user } = useContext(AuthContext);
    const { recipe_name, _id, recipe_provider, category, recipe_photo, user_photo, video } = rcp;

    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/ratings/${_id}`)
            .then(res => res.json())
            .then(data => {
                setRating(data)
            })
    }, [])

    const AvgRating = rating.avgRating;

    const handleBookmark = () => {
        const bookmarks = {
            recipe_id: _id,
            recipe_photo,
            category,
            recipe_name,
            video,
            user_name: user?.displayName
        }
        fetch('http://localhost:5000/bookmarks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookmarks)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.info('Recipe is saved', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
    };

    return (
        <div className="card w-48 h-80 card-compact bg-base-100 shadow-lg">
            <figure className="image-container  ">
                <img className="recipe-pic h-40" src={recipe_photo} alt="Recipe" />
                <div className="overlay">
                    <a href={video} className="overlay-text px-2 flex items-center"><svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" /><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" /></svg><small>youtube.com/...</small></a>
                </div>
            </figure>

            {/* Bookmark */}
            <button onClick={handleBookmark} className="bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white absolute right-3 top-3 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#f8cf5f" d="M19 3H5v18l7-3l7 3V3z" /></svg>
                <p className="-mt-1"><small>save</small></p>
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            {/* Ratings */}
            <div className="bg-black bg-opacity-70 rounded-full flex gap-1 items-center justify-center text-white absolute left-3 top-3 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#ffce33" d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z" /></svg>
                <p className='text-xs'>{AvgRating ? AvgRating.toFixed(2) : '0'}</p>
            </div>
            <div className="card-body mt-3">
                <h2 className="text-center font-serif font-bold mb-2">{recipe_name}</h2>
                <div className='flex justify-between items-center gap-5'>
                    <Link className="flex items-center gap-1 justify-center">
                        <img className="w-8 rounded-full" src={user_photo} alt="" />
                        <p><small className="font-mono">{recipe_provider}</small></p>
                    </Link>
                    <Link to={`/recipeDetails/${_id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainHome;