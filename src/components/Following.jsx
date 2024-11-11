import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Following = () => {
    const { username } = useParams();
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFollowing = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${username}/following`);
                if (!response.ok) {
                    throw new Error('Failed to fetch following');
                }
                const data = await response.json();
                console.log('Fetched Following:', data); 
                setFollowing(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFollowing();
    }, [username]);

    if (loading) {
        return <div>Loading following...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!following.length) {
        return <div>No following.</div>;
    }

    return (
        <div className='text-white flex flex-col p-10'>
            <h1 className='font-medium text-center text-[2rem] mb-10'>Following</h1>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 min-[425px]:grid-cols-2 min-[820px]:grid-cols-3'>
                {following.map(following => (
                    <div key={following.id} className='flex flex-col items-center border border-neutral-700 p-10 rounded-xl hover:bg-white hover:text-black font-bold gap-5'>
                        <img src={following.avatar_url} alt={following.login} width={90} height={90} className='rounded-full' />
                        <a href={following.html_url} target="_blank" rel="noopener noreferrer">
                            {following.login}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Following;
