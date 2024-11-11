import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UserDetails from './UserDetails';

const Followers = () => {
    const { username } = useParams();
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFollowers = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${username}/followers`);
                if (!response.ok) {
                    throw new Error('Failed to fetch followers');
                }
                const data = await response.json();
                console.log('Fetched Followers:', data); // Debugging log
                setFollowers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFollowers();
    }, [username]);

    if (loading) {
        return <div>Loading followers...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!followers.length) {
        return <div>No followers found.</div>;
    }

    return (
        <div className='text-white flex flex-col p-10'>
            <h1 className='font-medium text-center text-[2rem] mb-10'>Followers</h1>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 min-[425px]:grid-cols-2 min-[820px]:grid-cols-3'>
                {followers.map(follower => (
                    <div key={follower.id} className='flex flex-col items-center border border-neutral-700 p-10 rounded-xl hover:bg-white hover:text-black font-bold gap-5'>
                        <img src={follower.avatar_url} alt={follower.login} width={90} height={90} className='rounded-full' />
                        <button onClick={<UserDetails />}>
                            <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
                                {follower.login}
                            </a>
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Followers;
