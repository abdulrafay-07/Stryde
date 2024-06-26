import React, { useEffect, useState } from 'react';
import appwriteService from '../../appwrite/config';
import { LoadingState, PostCard } from '../index';
import { useSearchParams } from 'react-router-dom';

const Posts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();

    if (!posts) {
        return null;
    }

    const getPosts = async () => {
        setLoading(true);
        const posts = await appwriteService.getForums();
        
        if (posts) {
            setPosts(posts.documents);
        }
        setLoading(false);
    };

    const getPostsByCategory = async (category) => {
        setLoading(true);
        const posts = await appwriteService.getForumsByCategory(category);
        
        if (posts) {
            setPosts(posts.documents);
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        
        const category = searchParams.get('category') || '';
        
        if (category === '') {
            getPosts();
        } else {
            getPostsByCategory(category);
        }

    }, [searchParams]);

    if (loading) {
        return (
            <div className='flex items-center justify-center text-2xl md:text-4xl py-20'>
                <LoadingState />
            </div>
        )
    }

    return posts.length === 0 ? (
        <div className='py-8'>
            <div className='flex flex-col items-center gap-y-5 md:gap-y-10'>
                <img src='/no-results.png' alt='no posts found' className='md:h-52 md:w-52 h-32 w-32 rounded-full' />
                <h1 className='text-3xl font-logo text-center'>Sorry, no posts found.</h1>
            </div>
        </div>
    ) : (
        <div className='space-y-8'>
            {posts.map((post) => (
                <PostCard key={post.$id + post.title} post={post} />
            ))}
        </div>
    )
}

export default Posts;