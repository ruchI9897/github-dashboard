import React, { useEffect } from 'react';
import UserCard from './UserCard';
import { AllCards } from '../styling';

const SearchResults = ({users}) => {

  return <AllCards>
        {( users && users.map((user) => {
            return <UserCard user={user} />
        })
        )}
        </AllCards> 
};

export default React.memo(SearchResults);
