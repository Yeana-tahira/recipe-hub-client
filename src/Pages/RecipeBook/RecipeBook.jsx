import React from 'react';
import dudeKitchen from '../../assets/Books/dudes-kitchen.jpg';
import dudeKitchenBook from '../../assets/Books/dudes-kitchen.pdf';
import cookItalian from '../../assets/Books/cook-italian.jpg';
import cookItalianBook from '../../assets/Books/cook-italian.pdf';
import wildDelights from '../../assets/Books/wildDelights.jpg';
import wildDelightsBook from '../../assets/Books/wildDelights.pdf';
import chickenRecipes from '../../assets/Books/chickenRecipes.jpg';
import chickenRecipesBook from '../../assets/Books/chickenRecipes.pdf';

const RecipeBook = () => {
    return (
        <div className='my-10 mx-10 grid grid-cols-4'>
            {/* Book Details */}
            <div className='grid justify-center'>
                <a href={dudeKitchenBook} target='_blank'>
                    <img class="img-fluid w-48" alt="open pdf" src={dudeKitchen} />
                </a>
                <div className='mt-2 '>
                    <h1 className='font-bold font-serif text-lg'>Dudes' Kitchen</h1>
                    <p className='text-sm'><span className='font-bold'>Author:</span> Obooko Publishing</p>
                    <a href={dudeKitchenBook} attributes-list download className='flex gap-2 font-bold text-sm text-blue-700'>Click To Download
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z" /></svg></a>
                </div>
            </div>

            {/* Book Details */}
            <div className='grid justify-center'>
                <a href={cookItalianBook} target='_blank'>
                    <img class="img-fluid w-48" alt="open pdf" src={cookItalian} />
                </a>
                <div className='mt-2 '>
                    <h1 className='font-bold font-serif text-lg'>Cook Italian</h1>
                    <p className='text-sm'><span className='font-bold'>Author:</span> W. G. Waters</p>
                    <a href={cookItalianBook} attributes-list download className='flex gap-2 font-bold text-sm text-blue-700'>Click To Download
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z" /></svg></a>
                </div>
            </div>
            {/* Book Details */}
            <div className='grid justify-center'>
                <a href={wildDelightsBook} target='_blank'>
                    <img class="img-fluid w-48" alt="open pdf" src={wildDelights} />
                </a>
                <div className='mt-2 '>
                    <h1 className='font-bold font-serif text-lg'>Wild Delights</h1>
                    <p className='text-sm'><span className='font-bold'>Author:</span> Helen We. & Marie Wo.</p>
                    <a href={wildDelightsBook} attributes-list download className='flex gap-2 font-bold text-sm text-blue-700'>Click To Download
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z" /></svg></a>
                </div>
            </div>
            {/* Book Details */}
            <div className='grid justify-center'>
                <a href={chickenRecipesBook} target='_blank'>
                    <img class="img-fluid w-48" alt="open pdf" src={chickenRecipes} />
                </a>
                <div className='mt-2 '>
                    <h1 className='font-bold font-serif text-lg'>300 Recipes for Chicken</h1>
                    <p className='text-sm'><span className='font-bold'>Author:</span> Henrietta Wilding</p>
                    <a href={chickenRecipesBook} attributes-list download className='flex gap-2 font-bold text-sm text-blue-700'>Click To Download
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z" /></svg></a>
                </div>
            </div>
        </div>
    );
};

export default RecipeBook;