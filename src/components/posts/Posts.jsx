import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appwriteService from '../../appwrite/config';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    if (!posts) {
        return null;
    }

    useEffect(() => {
        const getPosts = async () => {
            const posts = await appwriteService.getForums();

            if (posts) {
                console.log(posts.documents);
                setPosts(posts.documents);
            }
        }

        getPosts();
    }, []);

    return (
        <div className='space-y-8'>
            {posts.map((post) => (
                <div
                    key={post.$id + post.title}
                    className='px-5 py-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300 flex flex-col space-y-2'
                >
                    <div className='flex items-center gap-x-2'>
                        <div>
                            <img
                                alt='Profile Picture'
                                src={appwriteService.getPFPFilePreview(post.profilePicId)} 
                                className='h-14 w-14 object-cover rounded-full'
                            />
                        </div>
                        <div>
                            <h1>
                                <span className='font-semibold'>Post by:</span> {post.name}
                            </h1>
                            <p>
                                <span className='font-semibold'>Title:</span> {post.title}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            {post.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts;