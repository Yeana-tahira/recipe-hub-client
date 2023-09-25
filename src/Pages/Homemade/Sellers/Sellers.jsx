import React from 'react';

const Sellers = ({ seller }) => {
    const { _id,seller_name, seller_email, seller_photo, contact, location, description } = seller;
    return (
        <div>
            <div class="flow-root">
                <ul role="" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="w-24 h-24 rounded-full" src={seller_photo} alt="Neil image" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-xl font-bold text-gray-800 truncate ">
                                    {seller_name}
                                </p>
                                <p class="text-base text-gray-800 truncate ">
                                    {seller_email}
                                </p>
                            </div>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn login" onClick={() => document.getElementById(`${_id}`).showModal(_id)}>Contact to Order Food</button>
                            <dialog id={_id} className="modal">
                                <div className="modal-box px-10">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-error text-white absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold mt-8 text-center text-2xl font-serif">Seller Name: <span className='font-normal'>{seller_name}</span></h3>
                                    <p className="pt-4 flex items-center gap-2 -ml-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48"><path fill="#546E7A" d="M12 40V10h20c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4z" /><path fill="#4FC3F7" d="M32 13H16c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z" /><path fill="#B3E5FC" d="M19 30h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z" /><path fill="#37474F" d="M16 10h-4V4c0-1.1.9-2 2-2s2 .9 2 2v6z" /></svg>
                                    <span className='font-bold '>Contact:</span> {contact}</p>
                                    <p className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" /><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z" /><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" /><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" /><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" /></svg>
                                    <span className='font-bold'>Email:</span> {seller_email}</p>
                                    <p className="flex gap-3 mt-1 -ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M8.75 10a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0Z" /><path fill="red" fill-rule="evenodd" d="M3.774 8.877a8.038 8.038 0 0 1 8.01-7.377h.432a8.038 8.038 0 0 1 8.01 7.377a8.693 8.693 0 0 1-1.933 6.217L13.5 20.956a1.937 1.937 0 0 1-3 0l-4.792-5.862a8.693 8.693 0 0 1-1.934-6.217ZM12 5.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5Z" clip-rule="evenodd" /></svg>
                                    <span className='font-bold'>Location:</span> {location}</p>

                                    {/* Details */}
                                    <div>
                                        <h1 className='text-center font-bold mt-10 text-xl'>Sellers Message</h1>
                                        <p className='text-justify font-serif mt-3'>{description}</p>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </li>
                    <div class="divide-y divide-gray-200 dark:divide-gray-700"></div>
                </ul>
            </div>
        </div>
    );
};

export default Sellers;