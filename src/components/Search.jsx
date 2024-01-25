import React, { useState } from 'react';
import { fetchData, searchUsers } from '../APIs';
import SearchResults from './SearchResults';
import { SearchContainer, SearchInput } from '../styling';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [usersInfo, setUsersInfo] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if(e.target.value.length > 0){
        setUsersInfo([])
        const getSeachResult = async () => {
            const searcehedUsers = await searchUsers(e.target.value);
            if(searcehedUsers && searcehedUsers.length > 0){
                const userData = await Promise.allSettled(searcehedUsers.map(async (user) => {
                    return await fetchData(user.url);
                }))
                const userFilteredData = userData.map((user) => 
                    {
                        if(user.status === 'fulfilled') return user.value
                    })
                setUsersInfo(userFilteredData)
            }   
        }
        getSeachResult()
    }
    else{
        setUsersInfo([])
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <SearchResults users={usersInfo} />
    </SearchContainer>
  );
};

export default React.memo(Search);
