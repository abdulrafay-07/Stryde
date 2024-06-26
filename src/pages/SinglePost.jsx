import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { LoadingState } from '../components/index';
import { useSelector } from 'react-redux';

const SinglePost = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getForum(slug)
                .then((post) => {
                    if (post) {
                        setPost(post);
                    } else {
                        navigate('/');
                    }
                }).then(() => setLoading(false));
        } else {
            navigate('/');
        }
    }, [slug, navigate])

    return !loading ? (
        <div className='h-full min-h-screen dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary pl-20 pr-6 lg:px-28 xl:px-36 py-20 lg:py-12'>
            <div className='flex flex-col md:flex-row md:justify-evenly gap-4'>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='flex flex-col md:flex-row md:justify-between gap-4 w-full'>
                        <div className='flex items-center gap-x-2'>
                            <img
                                src={appwriteService.getPFPFilePreview(post.profilePicId)}
                                alt='profile picture'
                                className='w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full object-cover'
                            />
                            <div className='flex flex-col justify-center'>
                                <div className='dark:text-gray-200 text-neutral-700 opacity-80'>
                                    <h1>
                                        Post by: {post.name}
                                    </h1>
                                    <p>
                                        Category: {post.category}
                                    </p>
                                </div>
                                <h2 className='sm:text-xl lg:text-2xl font-semibold mt-1'>
                                    Title: {post.title}
                                </h2>
                            </div>
                        </div>
                        <div>
                            {post.imageId && (
                                <img
                                    src={appwriteService.getForumImageFilePreview(post.imageId)}
                                    className='w-full md:w-full md:h-40 lg:h-48 rounded-md object-cover'
                                />
                            )}
                        </div>
                    </div>
                    <p className='text-gray-200 py-3 md:py-6 md:px-4 text-sm md:text-base'>
                        {post.content}
                    </p>
                </div>
                <div>
                    ajdajwdajdaws
                </div>
            </div>
        </div>
    ) : (
        <div className='flex items-center justify-center text-2xl md:text-4xl py-20 min-h-screen'>
            <LoadingState />
        </div>
    )
}

export default SinglePost;