import React from 'react'
import UserSearch from './search-input'

const Search = () => {
  return (
    <div className='container mx-auto bg-black flex justify-center  w-[60rem] h-[40rem] rounded-xl shadow-2xl' >
      <UserSearch user={"jayadeep11"} />
    </div>
  )
}

export default Search
