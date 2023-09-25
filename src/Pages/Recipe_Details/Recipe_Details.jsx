import React, { useContext, useEffect, useState, } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Comments from './Comments';
import { ToastContainer, toast } from 'react-toastify';
import Rating from 'react-rating';
import axios from 'axios';

import 'font-awesome/css/font-awesome.min.css';

const Recipe_Details = () => {
    useTitle('Recipe Details');
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);

    const recipe = useLoaderData();
    const { _id, recipe_provider, recipe_photo, category, recipe_name, user_photo, email, ingredients, description, video } = recipe;

    // Rating Post
    const handleRatingChange = (value) => {
        setRating(value);
    };
    const recipeId = _id;
    const rateBy = user.email;

    useEffect(() => {
        // Only send the rating to the server when it changes
        if (rating !== 0) {
          fetch('http://localhost:5000/ratings', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({rating, recipeId, rateBy}),
          })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
                
            }
        })
        }
      }, [rating, recipeId, rateBy]);

    const starStyle = {
        color: '#FFCE33', // Set the star color to #FFCE33
    };



    // submit comment
    const submitComment = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;

        const comments = {
            comment,
            user_photo: user?.photoURL,
            user_name: user?.displayName,
            recipe_id: _id
        };
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                }
                form.reset();
            })
    }

    // get comment 
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, [comments]);

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
        <div>
            {/* banner */}
            <div className="hero p-7 mb-20" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-plate_2829-18465.jpg?w=1380&t=st=1693229377~exp=1693229977~hmac=aeb302cfc4ece0134b57f76e814cbe0db42fa3dffe3f2f05eb9cc4090c678ef2)' }}>
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div className="hero-content text-white">
                    <div className="max-w-md">
                        <h1 className=" text-center text-5xl font-serif font-bold">{recipe_name}</h1>
                    </div>
                </div>
            </div>
            {/* banner */}

            <div className='flex px-12 justify-center gap-20'>
                <div>
                    <img className='rounded-2xl border-0 m-0' src={recipe_photo} alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className='font-bold font-serif text-4xl mb-5'>{recipe_name}</h2>
                    <p><span className='font-bold'>Category:</span> {category}</p>
                    <button className='mt-3 flex cursor-pointer items-center' onClick={handleBookmark} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#f8cf5f" d="M19 3H5v18l7-3l7 3V3z" /></svg>
                        <p>Save Recipe</p>
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
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-bold text-lg mt-12'>Recipe By: </p>
                            <div className='flex mt-2 items-center'>
                                <img className='w-14 h-14 mr-2 rounded-full' src={user_photo} alt="" />
                                <p className='font-bold'>{recipe_provider}</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="blue" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
                            <Link to={`/otherProfile/${_id}`} className='font-bold text-sm'>Profile</Link>
                        </div>
                    </div>
                    <div>
                        {video ? <>
                            <p className='font-bold mt-10'>View Full Recipe on: </p>
                            <div>
                                <a href={video} className='flex items-center'><svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" /><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" /></svg> Youtube</a>
                            </div>
                        </> : <></>}
                    </div>

                    {/* Rating */}
                    <div className='mt-10'>
                        <p className='mb-2 font-bold'>Rate the Recipe:</p>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<i className="fa fa-star-o fa-2x" style={starStyle} />} // Font Awesome empty star
                            fullSymbol={<i className="fa fa-star fa-2x" style={starStyle} />}   // Font Awesome filled star
                            onClick={handleRatingChange}
                        />
                    </div>
                </div>
            </div>

            {/* details */}
            <div className='px-12 my-10 text-justify text-black'>
                <div>
                    <h1 className='font-bold text-xl'>Ingredients: </h1>
                    <p className='font-serif'>{ingredients}</p>
                </div>
                <div className='mt-8'>
                    <h1 className='font-bold text-xl'>Instructions: </h1>
                    <p className='font-serif'>{description}</p>
                </div>
            </div>

            {/* Comments */}
            <div className='px-12 mb-20'>
                <h1 className='font-bold text-lg'>{/* {comments?.length} */} Comments</h1>
                <div className='flex gap-3 '>
                    <img className='w-12 rounded-full mt-5' src={user?.photoURL} alt="" />
                    <form onSubmit={submitComment} className='flex items-center gap-3'>
                        <input type="text" name='comment' placeholder='Add a Comment...' className='w-96 mt-5 input input-bordered border-b-2 border-l-0 border-r-0 border-t-0 border-black' id="" />
                        <button type='submit' className='mt-8'><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 15 16"><path fill="currentColor" d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34c.05.18.05.36 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z" /></svg></button>
                    </form>
                </div>

                {comments ? <div className='mt-12 ml-8'>
                    {
                        comments.filter(filteredComments => filteredComments.recipe_id === _id).map(filteredComment => <Comments
                            key={filteredComment._id}
                            filteredComment={filteredComment}
                        ></Comments>)
                    }
                </div> : <></>}
            </div>
        </div>
    );
};

export default Recipe_Details;