import React, {  useState } from 'react';
import { CardDiv, NormalText, RepoContainer, RepoInfo, UserAvatar, UserBio, UserName, UserRepos } from '../styling';
import { Link } from 'react-router-dom';
import { fetchData } from '../APIs';
import { FaCodeFork } from "react-icons/fa6";
import { RiStarSLine } from "react-icons/ri";
import { CiWarning } from "react-icons/ci";

const RepoCard = ({repo}) => {

    const [repoContributor, setContributor] = useState([]);
    const [showContributorsList, setContributorsList] = useState(false);


    const showContributors = async () => {
        const info = await fetchData(repo.contributors_url);
        setContributor(info);
        setContributorsList(prev => !prev)
    }

  return (
        <CardDiv>
            <RepoContainer>
            <Link style={{ textDecoration: 'none' }} to={`/repo/${repo.name}`} state= {{contents_url:repo.contents_url, commits_url:repo.commits_url, issues_url:repo.issues_url}} >
                <UserName>{repo.name}</UserName>
                </Link>
                <UserBio>{repo.description}</UserBio>
            </RepoContainer>
            <RepoInfo>
                <UserRepos>
                    <FaCodeFork />
                    <NormalText>{repo.forks_count}</NormalText>
                </UserRepos>
                <UserRepos>
                        <RiStarSLine />
                        <NormalText>{repo.stargazers_count}</NormalText>
                </UserRepos>
                <UserRepos>
                        <CiWarning />
                        <NormalText>{repo.open_issues_count}</NormalText>
                </UserRepos>
            </RepoInfo>
                
            <button style={{alignSelf:'end'}} onClick={showContributors}>Show Contributors</button>
            {
                showContributorsList && repoContributor && repoContributor.map((contributor) => (
                    <div key={contributor.id} style={{display:'flex'}}>
                        <UserAvatar src={contributor.avatar_url} alt="avatar" />
                        <p>{contributor.login}</p>
                    </div>
                ))
            }
      </CardDiv>
  );
};

export default React.memo(RepoCard);
