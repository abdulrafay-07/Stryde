import React, { useEffect, useState } from 'react';
import appwriteService from '../../appwrite/config';
import { LoadingState, PostCard } from '../index';
import { useSearchParams } from 'react-router-dom';

const Posts = () => {
    const [loading, setLoading] = useState(true);
    const [allPosts, setAllPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchParams] = useSearchParams();

    const fetchAllPosts = async () => {
        setLoading(true);
        const posts = await appwriteService.getForums();
        if (posts) {
            setAllPosts(posts.documents);
        }
        setLoading(false);
    };

    const filterPostsByCategory = (category) => {
        if (category === '') {
            setFilteredPosts(allPosts);
        } else {
            const filtered = allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
            setFilteredPosts(filtered);
        }
    };

    useEffect(() => {
        fetchAllPosts();
    }, []);

    useEffect(() => {
        const category = searchParams.get('category') || '';
        filterPostsByCategory(category);
    }, [searchParams, allPosts]);

    if (loading) {
        return (
            <div className='flex items-center justify-center text-2xl md:text-4xl py-20'>
                <LoadingState />
            </div>
        );
    }

    return filteredPosts.length === 0 ? (
        <div className='py-8'>
            <div className='flex flex-col items-center gap-y-5 md:gap-y-10'>
                <img src='/no-results.png' alt='no posts found' className='md:h-52 md:w-52 h-32 w-32 rounded-full' />
                <h1 className='text-3xl font-logo text-center'>Sorry, no posts found.</h1>
            </div>
        </div>
    ) : (
        <div className='space-y-8'>
            {filteredPosts.map((post) => (
                <PostCard key={post.$id} post={post} />
            ))}
        </div>
    );
};

export default Posts;