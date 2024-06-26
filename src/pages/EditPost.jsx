import React, { useEffect, useState } from 'react';
import { CreatePost, Error, LoadingState } from '../components/index';
import { useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';

const EditPost = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            appwriteService.getForum(slug)
                .then((post) => {
                    if (post) {
                        setPost(post);
                    }
                })
                .then(() => setLoading(false));
        }
    }, [])

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
            <CreatePost post={post} />
        </div>
    )
}

export default EditPost;