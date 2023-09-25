import React from 'react';
import useTitle from '../../../hooks/useTitle';
import want from '../../../assets/want.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Link, useLoaderData } from 'react-router-dom';
import Sellers from '../Sellers/Sellers';

const Homemade = () => {
    useTitle('Homemade Food Sellers');
    const sellers = useLoaderData();

    return (
        <div>
            {/* banner */}
            <div className="hero p-7 mb-8" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1380&t=st=1693984306~exp=1693984906~hmac=93d548ed45bed0e89611e7f23de3279a70f5d7f6a237ab89bea7a7c227c9885f)' }}>
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div className="hero-content text-white -ml-96">
                    <div className="max-w-md">
                        <h1 className="text-center text-4xl font-serif font-bold">Homemade Food Sellers</h1>
                    </div>
                </div>
            </div>
            {/* banner */}

            {/* form of food seller*/}
            <div className='flex px-12 justify-center items-center'>
                <div>
                    <div>
                        <TypeAnimation className='font-bold  font-mono text-4xl'
                            style={{
                                height: '100px',
                                width: '495px',
                                display: 'block',
                            }}
                            sequence={['Want to become a Homemade Food Seller?', 800]}
                            repeat={1}
                        />
                    </div>
                    <Link to='/addSeller'><button className='btn mt-2 border-b-4 btn-outline'>Click Here</button></Link>
                </div>

                <div>
                    <img className='w-96' src={want} alt="" />
                </div>
            </div>

            {/* Seller list */}
            <h1 className='text-center font-bold w-1/2 mx-auto font-mono text-4xl bg-gradient-to-b rounded-xl mb-10 from-[#491B15] to-black text-white py-2'>Find Your Favorite Seller</h1>

            <div className='w-full max-w-4xl mb-10 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                {
                    sellers.map(seller => <Sellers
                        key={seller._id}
                        seller={seller}
                    ></Sellers>)
                }
            </div>
        </div>
    );
};

export default Homemade;