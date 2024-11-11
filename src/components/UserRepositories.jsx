import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserRepositories = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  if (loading) {
    return <div>Loading repositories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!repos.length) {
    return <div>No repositories found.</div>;
  }

  return (
    <div className=' lg:p-6'>
      <h2 className='text-xl font-bold mb-4 text-white'>Projects</h2>
      <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 min-[425px]:grid-cols-2 min-[820px]:grid-cols-3'>
        {repos.map(repo => (
          <Link
            to={repo.html_url}
            target='_blank'
            className='text-white text-center border border-neutral-700 p-10 rounded-xl hover:bg-white hover:text-black font-bold'
          >
            {repo.name}
            <p className='font-normal opacity-50 mt-3'>{repo.description}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;
