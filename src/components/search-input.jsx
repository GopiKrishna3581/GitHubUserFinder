import React, { useState } from "react";
import { SearchIcon } from "@primer/octicons-react";
import { Spinner } from "@primer/react";
import Profile from "./Profile";
import TiltCard from "./Card";

const UserSearch = ({ user }) => {

  const [username, setUsername] = useState(user);
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserdata] = useState([]);



  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setUserExists(0);
    if (!username) {
      setLoading(false);
      return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUserExists(data.id);
    setLoading(false);
    console.log(data)
    if (data) {
      setUserdata(data)
    }
  }

  const newUsername = username !== user && username;

  return (
    <div className='w-full lg:w-1/2'>
      <div className="relative py-6 flex-auto">
        <label className="block text-white text-sm font-bold mb-1">
          GitHub username
        </label>
        <div className="flex justify-end items-center relative">
          <input
            placeholder="Search GitHub"
            type="text"
            className="border border-gray-400 bg-transparent text-white rounded-lg p-4 w-full"
            value={username}
            onChange={handleUsernameChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />

          <span className="absolute mr-2 w-10 cursor-pointer" onClick={handleSearch}>
            {loading ? <Spinner /> : <SearchIcon size={32} className="text-white" />}
          </span>
        </div>
      </div>

      {loading ? null :
        <>
          {
            userExists > 1 ?
              <span className="text-[10px] bg-gradient-to-r from-purple-400 flex items-center justify-center to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text px-6">
                {/* profile component */}

                <TiltCard user={userData} />

              </span> :
              <span className="hidden px-6 text-sm">
                {userExists !== -1 && newUsername && newUsername !== user ?
                  <span className="text-red-500">User <strong>{newUsername}</strong> not found.</span> :
                  <span className="inline-flex items-baseline text-zinc-500">
                    <span className="pe-2">Click</span><SearchIcon size={16} />
                    <span className="ps-2">or pres <kbd>Enter</kbd> to search GitHub.</span>
                  </span>}
              </span>

          }
        </>

      }

    </div>
  );
};

export default UserSearch;
