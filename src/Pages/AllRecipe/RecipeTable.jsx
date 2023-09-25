import React from 'react';
import { Link } from 'react-router-dom';

const RecipeTable = ({recipe}) => {
    const {_id, recipe_provider, recipe_photo, category, recipe_name} = recipe;
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="w-24 rounded-xl">
                            <img src={recipe_photo} />
                        </div>
                        <div>
                            <div className="font-bold">{recipe_name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p className='uppercase'>{category}</p>
                </td>
                <td>
                    {recipe_provider}
                </td>
                <th>
                    <Link to={`/recipeDetails/${_id}`}><button className="btn login btn-xs">View details</button></Link>
                </th>
            </tr>
        </tbody>
    );
};

export default RecipeTable;