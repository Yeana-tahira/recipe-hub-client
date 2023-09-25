import React from 'react';

const Comments = ({filteredComment}) => {
    const { comment, user_photo, user_name} = filteredComment;

    return (
        <div className='flex gap-4'>
            <div className='mb-5'>
                <img className='rounded-full w-10' src={user_photo} alt="" />
            </div>
            <div>
                <h1 className='font-bold'>{user_name}</h1>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Comments;