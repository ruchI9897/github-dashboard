
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../../APIs';
import { AllCards, FilterContainer, SearchContainer } from '../../styling';
import RepoCard from '../../components/RepoCard';
import UserContext from '../../UserContext';


const UserDashboard = () => {
    const [reposInfo, setReposInfo] = useState([]);
    const [sortOption, setSortOption] = useState('name');
    const [searchQuery, setSearchQuery] = useState('');
    const { userInfo, setUserInfo } = useContext(UserContext);
    const { state: { repos_url , user} } = useLocation();

    useEffect(() => {
        const getData = async () => {
            const info = await fetchData(repos_url);
            setReposInfo(info);
        };
        getData();
        setUserInfo(user);
    }, [repos_url, setUserInfo, user]);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const sortRepos = (repos) => {
        switch (sortOption) {
            case 'open_issues':
                return repos.sort((a, b) => b.open_issues - a.open_issues);
            case 'forks':
                return repos.sort((a, b) => b.forks - a.forks);
            case 'stars':
                return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
            case 'name':
                return repos.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return repos;
        }
    };

    const filterRepos = (repos) => {
        return repos.filter((repo) => repo.name.toLowerCase().includes(searchQuery.toLowerCase()));
    };

    return (
        <SearchContainer>
            <h1>{userInfo.name}'s Repositories</h1>
            <FilterContainer>
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="name">Sort by Name</option>
                    <option value="open_issues">Sort by Open Issues</option>
                    <option value="forks">Sort by Forks</option>
                    <option value="stars">Sort by Stars</option>
                </select>
                <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search by Repo Name" />
            </FilterContainer>
                <AllCards>
                    {reposInfo.length > 0 &&
                        sortRepos(filterRepos(reposInfo)).map((repo) => {
                            return <RepoCard repo={repo} />;
                        })}
                </AllCards>
        </SearchContainer>
    );
};


export default UserDashboard;
