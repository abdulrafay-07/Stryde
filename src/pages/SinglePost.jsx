import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { Button, Error, LoadingState } from '../components/index';
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
                    }
                }).then(() => setLoading(false));
        }
    }, [slug, navigate])

    const deletePost = async () => {
        if (post?.imageId) {
            await appwriteService.deleteForumImageFile(post.imageId);
        }

        appwriteService.deleteForum(post.$id);
        navigate('/');
    }

    if (loading) {
        return (
            <div className='flex items-center justify-center text-2xl md:text-4xl py-20 min-h-screen'>
                <LoadingState />
            </div>
        );
    }

    if (!post) {
        return <Error />;
    }

    return (
        <div className='h-full min-h-screen dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary pl-20 pr-6 lg:px-28 xl:px-36 py-20'>
            <div className='flex flex-col lg:flex-row lg:justify-evenly gap-16 2xl:gap-32'>
                <div className='flex flex-col gap-3 w-full'>
                    <div className={`flex flex-col lg:flex-row lg:justify-between gap-4 ${!post.imageId ? 'lg:w-2/3' : 'w-full'}`}>
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
                            {isAuthor && post.imageId && (
                                <div className='lg:flex justify-evenly flex-col gap-6 pl-16 hidden'>
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button
                                            className='bg-green-500 rounded-3xl duration-300 hover:rounded-md w-full'
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                    <div>
                                        <Button
                                            onClick={deletePost}
                                            className='bg-red-500 rounded-3xl duration-300 hover:rounded-md'
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {isAuthor && post.imageId && (
                            <div className='flex justify-center flex-col gap-6 lg:hidden'>
                                <Link to={`/edit-post/${post.$id}`} className='flex justify-center'>
                                    <Button
                                        className='bg-green-500 rounded-3xl duration-300 hover:rounded-md w-2/3 md:w-1/3'
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <div className='flex justify-center'>
                                    <Button
                                        onClick={deletePost}
                                        className='bg-red-500 rounded-3xl duration-300 hover:rounded-md w-2/3 md:w-1/3'
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        )}
                        <div>
                            {post.imageId && (
                                <img
                                    src={appwriteService.getForumImageFilePreview(post.imageId)}
                                    className='w-full md:w-full lg:h-48 2xl:h-[450px] rounded-md object-cover'
                                />
                            )}
                            {isAuthor && !post.imageId && (
                                <div className='flex justify-evenly md:flex-col gap-6'>
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button
                                            className='bg-green-500 rounded-[20px] duration-300 hover:rounded-md w-full'
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        onClick={deletePost}
                                        className='bg-red-500 rounded-[20px] duration-300 hover:rounded-md'
                                    >
                                        Delete
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                    <p className='dark:bg-neutral-700 bg-gray-300 rounded-md dark:text-gray-200 text-neutral-700 py-3 md:py-6 px-2 md:px-4 text-sm md:text-base lg:text-xl lg:w-3/4 my-2 lg:my-6'>
                        {post.content}
                    </p>
                </div>
                <div>
                    Show similar posts
                </div>
            </div>
        </div>
    )
}

export default SinglePost;