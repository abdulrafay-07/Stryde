import React from 'react';
import appwriteService from '../../appwrite/config';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // months are zero-indexed, so add 1 and pad with leading zero
        const day = String(date.getDate()).padStart(2, '0'); // pad with leading zero
        return `${year}-${month}-${day}`;
    };

    return (
        <Link
            to={`/community-posts/${post.$id}`}
            className='px-3 py-2 md:px-5 md:py-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300 flex flex-col space-y-2'
        >
            <div className='flex items-center gap-x-2 py-1'>
                <div>
                    <img
                        alt='Profile Picture'
                        src={appwriteService.getPFPFilePreview(post.profilePicId)} 
                        className='h-14 w-14 object-cover rounded-full'
                    />
                </div>
                <div className='text-sm md:text-base'>
                    <h1>
                        <span className='font-semibold'>Post by:</span> {post.name}
                    </h1>
                    <p>
                        <span className='font-semibold'>Title:</span> {post.title}
                    </p>
                    <p>
                    <span className='font-semibold'>Posted at:</span> {formatDate(post.$createdAt)}
                    </p>
                </div>
            </div>
            <div className='p-4 m-2 dark:bg-neutral-700 bg-gray-100 rounded-md duration-300'>
                <p className='text-sm md:text-base dark:text-gray-200 text-neutral-700'>
                    {post.content}
                </p>
            </div>
        </Link>
    )
}

export default PostCard;