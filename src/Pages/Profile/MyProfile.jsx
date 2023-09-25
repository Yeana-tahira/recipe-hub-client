import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import UploadedRecipe from './UploadedRecipe/UploadedRecipe';
import Bookmarks from './Bookmarks/Bookmarks';
import { AuthContext } from '../../Providers/AuthProvider';

const MyProfile = ({ selectedUser }) => {
    const [uploadedRecipe, setUploadedRecipe] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/recipes?email=${selectedUser.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setUploadedRecipe(data);
            })
    }, []);

    const bookmark = 'http://localhost:5000/bookmarks';
    useEffect(() =>{
        fetch(bookmark, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setBookmarks(data);
            })
    },[bookmarks])
    const filteredBookmark = bookmarks.filter((bookmark) => bookmark.user_name === user?.displayName);

    return (
        <div>
            {/* banner */}
            <div className="hero p-12" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/heartshaped-fried-egg-served-with-toasted-bread-spices-plate-romantic-art-food-idea-valentine-s-breakfast-hard-light-dark-shadow-black-stone-concrete-background-banner-format_164638-19929.jpg?w=1380)' }}>
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div className="hero-content -ml-96 text-white">
                    <div className="max-w-md">
                        <h1 className="text-center text-3xl font-serif font-bold">Welcome, {selectedUser.name}</h1>
                    </div>
                </div>
            </div>
            {/* banner */}

            <div className='flex justify-center gap-24 lg:flex-row-reverse'>
                <div className='w-2/3 mt-10'>
                    <Tabs>
                        <TabList className='lg:flex justify-start gap-5 lg:mx-0 mx-20 mb-8'>
                            <Tab><button className='btn bg-black text-white'>Uploaded Recipe</button></Tab>
                            <Tab><button className='btn login'>Saved Recipe</button></Tab>
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
                        <TabPanel>
                        <div className='pr-16 grid grid-cols-3 items-center mb-8'>
                                {
                                    filteredBookmark.map(bookmark => <Bookmarks
                                        key={bookmark._id}
                                        bookmark={bookmark}
                                    ></Bookmarks>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="card w-80 bg-opacity-60 shadow-xl -top-11">
                    <div className="avatar online w-50 mx-auto">
                        <div className="w-28 rounded-full">
                            <img src={selectedUser.photo} />
                        </div>
                    </div>
                    <div className="card-body px-10 bg-opacity-80 items-center text-center">
                        <h2 className="card-title text-lg font-extrabold font-mono">{selectedUser.name}</h2>
                        <p className='text-sm'>{selectedUser.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;