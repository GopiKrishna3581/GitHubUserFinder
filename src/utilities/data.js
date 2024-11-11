import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Userfollowers = ({ username }) => {
  const [followers, setfollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchfollowers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}/followers`);
        if (!response.ok) {
          throw new Error('Failed to fetch followersitories');
        }
        const data = await response.json();
        setfollowers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchfollowers();
  }, [username]);

  if (loading) {
    return <div>Loading followersitories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!followers.length) {
    return <div>No followersitories found.</div>;
  }
}
